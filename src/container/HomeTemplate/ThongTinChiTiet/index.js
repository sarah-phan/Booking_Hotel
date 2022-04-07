import React, { useEffect } from 'react'
import { Alert, Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import { actGetChiTiet } from '../../../reducers/moduleAuth/action';
import { actPutDetailUser } from './module/action';
import "./style.css"
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

export default function ThongTinChiTiet(props) {
  const { id } = props.match.params
  const _id = id
  const dataUserDetail = useSelector(state => state.authReducer.data?.user) || {}
  const dataPutUserDetail = useSelector(state => state.putUserDetailReducer.data)
  const errorPutUserDetail = useSelector(state => state.putUserDetailReducer.error)
  const dispatch = useDispatch()
  const [form] = Form.useForm()

  console.log(dataUserDetail)
  useEffect(() => {
    dispatch(actGetChiTiet(_id))
  }, [_id])

  let defaultValues = {
    ['name']: dataUserDetail?.name,
    ['gender']: dataUserDetail?.gender ? "Nam" : "Nữ",
    ['address']: dataUserDetail?.address,
    ['birthday']: moment(new Date(dataUserDetail?.birthday).toLocaleDateString(), "MM-DD-YYYY"),
    ['phone']: dataUserDetail?.phone,
    ['email']: dataUserDetail?.email
  }

  useEffect(() => {
    form.setFieldsValue(defaultValues)
  }, [form, defaultValues])

  const onFinish = (fieldsValue) => {
    const values = {
      ...fieldsValue,
      'name': fieldsValue['name'],
      'email': fieldsValue['email'],
      'phone': fieldsValue['phone'],
      'birthday': new Date(fieldsValue['birthday']).toLocaleDateString(),
      'gender': fieldsValue['gender'] === "Nam" ? true : false,
      'address': fieldsValue['address'],
    }
    dispatch(actPutDetailUser(_id, values))
  }

  if (dataPutUserDetail !== null) {
    return (
      <Alert 
        message="Thay đổi thành công" 
        type="success" 
        showIcon 
        style={{ marginTop: 20 }}
        closable
        afterClose={() => window.location.reload()}
      />

    )
  }
  if (errorPutUserDetail !== null) {
    return (
      <Alert 
        message={errorPutUserDetail} 
        type="error" 
        showIcon 
        style={{ marginTop: 20 }}
        closable
        afterClose={() => window.location.reload()}
      />
    )
  }

  return (
    <div className='thongTinChiTietForm'>

      <Form
        form={form}
        onFinish={onFinish}
        layout='vertical'
        initialValues={defaultValues}
      >
        <Row>
          <Col span={12} className="thongTinCaNhanForm">
            <h3>Thông tin cá nhân</h3>
            <Form.Item
              label="Họ và tên"
              name="name"
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              label="Giới tính"
              name="gender"
            >
              <Select defaultValue="true">
                <Select.Option value="true">Nam</Select.Option>
                <Select.Option value="false">Nữ</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Địa chỉ"
              name="address"
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              label="Ngày tháng năm sinh"
              name="birthday"
            >
              <DatePicker format={"DD-MM-YYYY"} />
            </Form.Item>
          </Col>
          <Col span={12} className="phoneEmailForm">
            <h3>Số điện thoại và email</h3>
            <Form.Item
              label="Số điện thoại"
              name="phone"
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
            >
              <Input type="email" />
            </Form.Item>
          </Col>
        </Row>
        <Button className='updateInformationButton' htmlType='submit'>Lưu thay đổi</Button>
      </Form>

    </div>
  )
}
