import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actGetDetailViTri } from '../module/action'
import { actGetListRoomPaginate } from './module/action'
import { actGetListRoom } from './module/action'
import { Row, Col, Pagination } from 'antd'

export default function ListRoom(props) {
    const { idViTri } = props
    const dataDetailViTri = useSelector(state => state.getDetailViTriReducer.data)
    const dataListRoomPaginate = useSelector(state => state.getListRoomPaginateReducer.dataPaginate)
    const dataListRoom = useSelector(state => state.getListRoomReducer.data)
    const dataAdvancedSearch = useSelector(state => state.getAdvancedSearchValueReducer.value)
    const prevValues = useSelector(state => state.getValueSearchReducer.value)
    const dispatch = useDispatch()

    let conditionObjUpdated = []

    const [params, setParams] = useState({
        limit: 4,
        skip: 0,
    })

    const changeValue = () => {
        let skipNext = params.skip + 4
        setParams({
            limit: 4,
            skip: skipNext
        })
    }
    useEffect(() => {
        dispatch(actGetDetailViTri(idViTri))
        dispatch(actGetListRoomPaginate(params.skip, params.limit, idViTri))
        dispatch(actGetListRoom(idViTri))
    }, [params.skip, params.limit, idViTri])

    // const checkCondition = () => {
    //     let conditionObj = {
    //         checkedList: "",
    //         priceMin: "",
    //         priceMax: ""
    //     }
    //     if (dataAdvancedSearch !== null) {
    //         conditionObj.checkedList = dataAdvancedSearch.checkedList
    //         conditionObj.priceMin = dataAdvancedSearch.priceMin
    //         conditionObj.priceMax = dataAdvancedSearch.priceMax
    //     }
    //     return conditionObj
    // }
    // console.log(checkCondition())
    console.log(dataAdvancedSearch)
    console.log(dataListRoomPaginate)
    console.log(dataListRoom)

    const arr = []
    const abc = () => {
        if (dataAdvancedSearch === null) {
            return arr
        }
        if (dataAdvancedSearch !== null) {
            return dataAdvancedSearch.checkedList.map(ele => {
                switch (ele) {
                    case ("Wifi"): {
                        arr.push("wifi")
                        return arr;
                    }
                    case ("Thang máy"): {
                        arr.push("elevator")
                        return arr;
                    }
                    case ("Bồn tắm nước nóng"): {
                        arr.push("hotTub")
                        return arr;
                    }
                    case ("Hồ bơi"): {
                        arr.push("pool")
                        return arr
                    }
                    case ("Lò sưởi trong nhà"): {
                        arr.push("indoorFireplace")
                        return arr
                    }
                    case ("Máy sấy tóc"): {
                        arr.push("dryer")
                        return arr
                    }
                    case ("Phòng tập gym"): {
                        arr.push("gym")
                        return arr
                    }
                    case ("Nhà bếp"): {
                        arr.push("kitchen")
                        return arr
                    }
                    case ("Hệ thống sưởi"): {
                        arr.push("heating")
                        return arr
                    }
                    case ("Truyền hình cáp"): {
                        arr.push("cableTV")
                        return arr
                    }
                    default:
                        return arr
                }
            })
        }
    }

    abc()
    console.log(arr)

    const renderListRoom = () => {
        return dataListRoomPaginate?.map((room, index) => {
            var formatter = new Intl.NumberFormat('VND', {
                style: 'currency',
                currency: 'VND',
            })
            return (
                <Row className='listRoomComponent' key={index}>
                    <Col span={7}>
                        <img src={room.image} alt={room.image} width="90%" />
                    </Col>
                    <Col span={16}>
                        <h3>{room.name}</h3>
                        <p>{room.guests} khách</p>
                        <p>{room.bedRoom} phòng ngủ</p>
                        <Row>
                            <Col span={12}>
                                <p>{room.bath} phòng tắm</p>
                            </Col>
                            <Col span={12}>
                                <p style={{ textAlign: 'right', fontWeight: 700, fontSize: 20 }}>{formatter.format(room.price)}/đêm</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            )
        })
    }

    return (
        <div>
            <div className='listRoomTitle'>
                <h4>
                    {`${dataDetailViTri?.province}, ${dataDetailViTri?.country}`}
                </h4>
            </div>
            <div className='listRoomContent'>
                {renderListRoom()}
                <Pagination defaultCurrent={1} total={50} onChange={changeValue}></Pagination>
            </div>
        </div>
    )
}
