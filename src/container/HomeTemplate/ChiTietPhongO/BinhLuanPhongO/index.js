import React, { useEffect } from 'react'
import { actGetListRoomComment } from './module/action'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, Col, Row } from 'antd'

export default function BinhLuanPhongO(props) {
    const {id} = props
    const dataListComment = useSelector(state => state.getListCommentReducer.data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actGetListRoomComment(id))
    }, [id])

    const renderListRoomComment = () => {
        if(!(dataListComment === [])){
            return(
                <p style={{fontSize: 18, color: "#a3a1a1"}}>Chưa có bình luận</p>
            )
        }
        return dataListComment?.map((comment, index) => {
            return(
                <Col span={12} key={index}>
                    <Row>
                        <Col span={4}>
                            <Avatar src={comment.userId.avatar} size={50} shape="square"/>
                        </Col>
                        <Col span={12}>
                            <h4>{comment.userId.name}</h4>
                            <p className='timeComment'>{new Date(comment.created_at).toLocaleDateString()}</p>
                        </Col>
                    </Row>
                    <p className='commentContent'>{comment.content}</p>
                </Col>
            )
        })
    }
    return (
        <div className='roomCommentContent'>
            <Row style={{rowGap: 60}}>
                {renderListRoomComment()}
            </Row>
        </div>
    )
}
