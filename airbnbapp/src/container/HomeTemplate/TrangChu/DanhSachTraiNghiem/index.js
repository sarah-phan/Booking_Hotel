import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card, Row, Col, Pagination } from 'antd';
import { actViTriPhanTrang } from './module/action';
import { NavLink } from 'react-router-dom';

export default function DanhSachTraiNghiem() {
    const dispatch = useDispatch()
    const data = useSelector(state => state.getViTriPhanTrangReducer.data)
    const { Meta } = Card;

    const [params, setParams] = useState({
        limit: 6,
        skip: 0,
    })

    useEffect(() => {
        dispatch(actViTriPhanTrang(params.limit, params.skip))
    }, [params.limit, params.skip])

    const changeValue = (page) => {
        setParams({
            limit: 6,
            skip: (page - 1) * 6
        })
    }

    const renderCardTraiNghiem = () => {
        return data?.map((traiNghiem, index) => {
            console.log(traiNghiem)
            return (
                <Col key={index} span={8}>
                    <NavLink to={`/danh-sach-phong-o/${traiNghiem._id}`}>
                    <Card
                        hoverable
                        style={{ width: 290 }}
                        cover={<img alt={traiNghiem.image} src={traiNghiem.image} style={{ objectFit: 'cover', height: 300, width: "100%" }} />}
                    >
                        <Meta title={traiNghiem.name} description={`${traiNghiem.province}, ${traiNghiem.country}`} />
                    </Card>
                </NavLink >
                    
                </Col>
                
                
            )
})
    }
return (
    <>
        <h1 className='traiNghiemTitle'>Trải nghiệm</h1>
        <div className='renderCard'>
            <Row>
                {renderCardTraiNghiem()}
            </Row>
            <Pagination defaultCurrent={1} total={131} onChange={changeValue}></Pagination>
        </div>
    </>
)
}
