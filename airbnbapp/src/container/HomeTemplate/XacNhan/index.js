import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actGetDetailRoom } from '../ChiTietPhongO/module/action'
import { useHistory } from 'react-router-dom'
import { Button } from 'antd'

export default function XacNhan(props) {
    const { id } = props.match.params
    const dataDetailRoom = useSelector(state => state.getDetailRoomReducer.data)
    const loadingDetailRoom = useSelector(state => state.getDetailRoomReducer.loading)
    const prevValues = useSelector(state => state.getValueSearchReducer.value)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(actGetDetailRoom(id))
    }, [id])
    console.log(prevValues)

    if (prevValues === null) {
        history.goBack(`/chi-tiet-phong-o/${id}`)
    }

    const numberCustomerPrev = prevValues?.numberCustomer
    const checkInDatePrev = new Date(prevValues?.checkInDate._d).toLocaleDateString('en-GB')
    const checkOutDatePrev = new Date(prevValues?.checkInDate._d).toLocaleDateString('en-GB')

    return (
        <div className='claimPage'>
            <h2>Xác nhận và đặt chỗ</h2>
            <h3>1. Chuyến đi của bạn</h3>
            <div className='bookingInformation'>
                <span>Khách sạn</span>
                <span>{dataDetailRoom?.name}</span>
                <br />
                <span>Ngày nhận phòng</span>
                <span>{checkInDatePrev}</span>
                <br />
                <span>Ngày trả phòng phòng</span>
                <span>{checkOutDatePrev}</span>
                <br />
                <span>Số lượng khách</span>
                <span>{numberCustomerPrev}</span>

            </div>
            <h3>2. Chi tiết giá tiền</h3>
            <div className='detailPrice'>

            </div>
            <div className='buttonXacNhan'>
                <Button onClick={() => history.goBack(`/chi-tiet-phong-o/${id}`)}>Chỉnh sửa</Button>
            </div>
        </div>
    )
}
