import { Col, Row } from 'antd';
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Loading from '../../../components/loading';
import { actGetListBookingHistory } from './module/action'
import "./style.css"

export default function LichSu(props) {
  const { id } = props.match.params
  const _id = id
  const dataListHistory = useSelector(state => state.getListBookingHistoryReducer.data);
  const loadingListHistory = useSelector(state => state.getListBookingHistoryReducer.loading);
  const dispatch = useDispatch()

  var formatter = new Intl.NumberFormat('VND', {
    style: 'currency',
    currency: 'VND',
  })

  useEffect(() => {
    dispatch(actGetListBookingHistory(_id))
  }, [_id])

  if (loadingListHistory) {
    return (
      <Loading />
    )
  }
  const renderListHistory = () => {
    return dataListHistory?.map((list, index) => {
      const differenceInDay1 = Math.abs((new Date(list.checkOut).getTime() - new Date(list.checkIn).getTime()) / (1000 * 3600 * 24))
      const diferrenceInDay2 = Math.round(differenceInDay1)
      const totalPrice = list.roomId.price * diferrenceInDay2
      return (
        <Fragment key={index}>
          <NavLink to={`/tai-khoan/${_id}/lich-su/chi-tiet-lich-su/${list._id}`}>
            <Row className='lichSuElement'>
              <Col span={7}>
                <img src={list.roomId.image} alt={list.roomId.image} width="100%" />
              </Col>
              <Col span={17}>
                <h2>{list.roomId.name}</h2>
                <p>{formatter.format(totalPrice)}</p>
              </Col>
            </Row>
          </NavLink>
        </Fragment>
      )
    })
  }
  return (
    <div className='lichSu'>
      {renderListHistory()}
    </div>
  )
}
