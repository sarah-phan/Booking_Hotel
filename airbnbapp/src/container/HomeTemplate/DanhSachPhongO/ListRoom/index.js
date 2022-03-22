import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actGetDetailViTri } from '../module/action'
import { actGetListRoomPaginate } from './module/action'
import { Row, Col, Pagination } from 'antd'
import { NavLink } from 'react-router-dom'
import Loading from '../../../../components/loading'

export default function ListRoom(props) {
    const { idViTri } = props
    const dataDetailViTri = useSelector(state => state.getDetailViTriReducer.data)
    const loadingDetailViTri = useSelector(state => state.getDetailViTriReducer.loading)
    const dataListRoomPaginate = useSelector(state => state.getListRoomPaginateReducer.dataPaginate)
    const loadingListRoomPaginate = useSelector(state => state.getListRoomPaginateReducer. loading)
    const dataAdvancedSearch = useSelector(state => state.getAdvancedSearchValueReducer.value)
    const prevValues = useSelector(state => state.getValueSearchReducer.value)
    const dispatch = useDispatch()
    let roomSearch = []

    const [params, setParams] = useState({
        limit: 4,
        skip: 0,
    })

    const changeValue = (page) => {
        setParams({
            limit: 4,
            skip: (page - 1) * 4
        })
    }
    useEffect(() => {
        dispatch(actGetDetailViTri(idViTri))
        dispatch(actGetListRoomPaginate(params.skip, params.limit, idViTri))
    }, [params.skip, params.limit, idViTri])

    if(loadingListRoomPaginate || loadingDetailViTri){
        return(
            <Loading/>
        )
    }

    const applyFilter = (dataListRoomPaginate) => {
        if (dataAdvancedSearch === null) {
            if (prevValues === null) {
                return dataListRoomPaginate
            }
            if (prevValues !== null) {
                return dataListRoomPaginate?.filter((item) => {
                    if (item.guests < prevValues.numberCustomer) return false
                    return true
                })
            }
        }
        if (dataAdvancedSearch !== null) {
            if (prevValues === null) {
                return dataListRoomPaginate?.filter((item) => {
                    for (const option of dataAdvancedSearch.checkedList) {
                        if (!item[option]) return false
                    }
                    if (item.price < dataAdvancedSearch.priceMin || item.price > dataAdvancedSearch.priceMax) return false;
                    return true
                })
            }
            if (prevValues !== null) {
                return dataListRoomPaginate?.filter((item) => {
                    if (item.guests <= prevValues.numberCustomer) return false
                    if (item.price < dataAdvancedSearch.priceMin || item.price > dataAdvancedSearch.priceMax) return false;
                    for (const option of dataAdvancedSearch.checkedList) {
                        if (!item[option]) return false
                    }
                    return true
                })
            }
        }
    }
    roomSearch = applyFilter(dataListRoomPaginate)

    const renderListRoom = (roomSearch) => {
        return roomSearch?.map((room, index) => {
            var formatter = new Intl.NumberFormat('VND', {
                style: 'currency',
                currency: 'VND',
            })
            return (
                <NavLink to={`/chi-tiet-phong-o/${room._id}`}>
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
                </NavLink>

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
                {renderListRoom(roomSearch)}
                <Pagination defaultCurrent={1} total={50} onChange={changeValue}></Pagination>
            </div>
        </div>
    )
}
