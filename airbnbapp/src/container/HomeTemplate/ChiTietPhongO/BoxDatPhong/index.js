import { Button, Col, DatePicker, Form, InputNumber, Row } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'

export default function BoxDatPhong(props) {
  const { price, location } = props
  const prevValues = useSelector(state => state.getValueSearchReducer.value)
  var formatter = new Intl.NumberFormat('VND', {
    style: 'currency',
    currency: 'VND',
  })

  const numberCustomerPrev = prevValues?.numberCustomer
  const checkInDatePrev = prevValues?.checkInDate._d === undefined ? null : moment(prevValues?.checkInDate._d, "DD-MM-YYYY")
  const checkOutDatePrev = prevValues?.checkOutDate._d === undefined ? null : moment(prevValues?.checkOutDate._d, "DD-MM-YYYY")

  const footerBox = () => {
    if (prevValues === null) {
      return (
        <Button htmlType='submit' className='buttonSubmitPhongO'>Kiểm tra</Button>
      )
    }
    if (prevValues !== null) {
      return (
        <Button htmlType='submit' className='buttonSubmitPhongO'>Đặt phòng</Button>
      )
    }
  }

  const onFinish = (fieldsValue) => {
    const values = {
      ...fieldsValue,
      'checkInDate': fieldsValue['checkInDate'],
      'checkOutDate': fieldsValue['checkOutDate'],
      'numberCustomer': fieldsValue['numberCustomer'],
      'selectLocation': location,
    }
    console.log(values)
  }
  return (
    <div className='boxDatPhong'>
      <h3>{formatter.format(price)}<span style={{fontSize: 18}}>/đêm</span></h3>
      <Form onFinish={onFinish}>
        <div className='formDatPhong'>
          <Row>
            <Col span={12}>
              <Form.Item
                label="Ngày nhận phòng"
                name="checkInDate"
                className='checkInItem'
              >
                <DatePicker
                  format="DD-MM-YYYY"
                  defaultValue={checkInDatePrev}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Ngày trả phòng"
                name="checkOutDate"
                className='checkOutItem'
              >
                <DatePicker
                  format="DD-MM-YYYY"
                  defaultValue={checkOutDatePrev}
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            label="Số lượng khách"
            name="numberCustomer"
            style={{marginLeft: 10}}
          >
            <InputNumber min={1} max={20} style={{ width: "95%" }} defaultValue={numberCustomerPrev} />
          </Form.Item>
        </div>
        {footerBox()}
      </Form>

    </div>
  )
}
