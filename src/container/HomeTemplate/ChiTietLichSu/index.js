import { CheckCircleFilled } from '@ant-design/icons';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actGetHistoryDetail } from './module/action'
import "./style.css"

export default function ChiTietLichSu(props) {
  const { idList } = props.match.params;
  const dataHistoryDetail = useSelector(state => state.getDetailHistoryReducer.data);
  const loadingHistoryDetail = useSelector(state => state.getDetailHistoryReducer.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actGetHistoryDetail(idList))
  }, [idList])

  var formatter = new Intl.NumberFormat('VND', {
    style: 'currency',
    currency: 'VND',
  })

  const checkInDate = new Date(dataHistoryDetail?.checkIn).toLocaleDateString('en-GB')
  const checkOutDate = new Date(dataHistoryDetail?.checkOut).toLocaleDateString('en-GB')
  const differenceInDay1 = Math.abs((new Date(dataHistoryDetail?.checkOut).getTime() - new Date(dataHistoryDetail?.checkIn).getTime()) / (1000 * 3600 * 24))
  const diferrenceInDay2 = Math.round(differenceInDay1)
  const totalPrice = dataHistoryDetail?.roomId.price * diferrenceInDay2

  return (
    <div className='historyDetail'>
      <div className='historyDetailIcon'>
        <CheckCircleFilled />
      </div>
      <h2>Đặt chỗ thành công</h2>
      <div className='historyDetailContent'>
        <div className='contentFlex'>
          <span>Mã đặt chỗ</span>
          <span>{dataHistoryDetail?._id}</span>
        </div>
        <div className='contentFlex'>
          <span>Tên khách sạn</span>
          <span>{dataHistoryDetail?.roomId.name}</span>
        </div>
        <div className='contentFlex'>
          <span>Thời gian check in</span>
          <span>{checkInDate}</span>
        </div>
        <div className='contentFlex'>
          <span>Thời gian check out</span>
          <span>{checkOutDate}</span>
        </div>
      </div>
      <div className='historyDetailPrice'>
        <div className='contentFlex'>
          <span style={{marginTop: 15}}>Giá tiền 1 đêm</span>
          <span style={{marginTop: 15}}>{formatter.format(dataHistoryDetail?.roomId.price)}</span>
        </div>
        <div className='contentFlex'>
          <span>{formatter.format(dataHistoryDetail?.roomId.price)} x {diferrenceInDay2}</span>
          <span style={{fontWeight: 700, color: "#f1576b"}}>{formatter.format(totalPrice)}</span>
        </div>
      </div>
    </div>
  )
}
