import React from 'react'
import "./style.css"
import { Row, Col } from "antd"
import { Form, InputNumber, Select, DatePicker } from "antd"
import { Avatar, Space, Dropdown, Button, Menu } from 'antd'
import { EnvironmentOutlined, UnorderedListOutlined, UserOutlined } from "@ant-design/icons"

export default function TrangChu() {
  const TimeRelatedForm = () => {
    const onFinished = (fieldsValue) => {
      const values = {
        ...fieldsValue,
        'check-in-date': fieldsValue['check-in-date'].format('DD-MM-YYYY'),
        'check-out-date': fieldsValue['check-out-date'].format('DD-MM-YYYY'),
        'number-customer': fieldsValue['number-customer'],
        'select-location': fieldsValue['select-location']
      }
      console.log("values: ", values)
    }
    return (
      <Form
        className='formTimKiemNoiDung'
        layout='vertical'
        onFinish={onFinished}
      >
        <Form.Item 
        label="Địa điểm" 
        >
          <Select name="select-location" suffixIcon={<EnvironmentOutlined />} style={{ width: "90%" }}>
            <Select.Option value="HoChiMinh">Ho Chi Minh</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Ngày nhận phòng" name="check-in-date" rules={
          [
            {
              required: true,
              message: "Hãy chọn ngày nhận phòng"
            }
          ]
        }>
          <DatePicker style={{ width: "90%" }} />
        </Form.Item>
        <Form.Item label="Ngày trả phòng" name="check-out-date">
          <DatePicker style={{ width: "90%" }} />
        </Form.Item>
        <Form.Item label="Số lượng khách">
          <Form.Item name="number-customer" noStyle>
            <InputNumber min={1} max={20} style={{ width: "90%" }} />
          </Form.Item>
        </Form.Item>
        <Button htmlType="submit" className='buttonSubmit'>
          Submit
        </Button>
      </Form>
    )
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className='trangChuCarousel'>
      <div className='header'>
        <Space wrap>
          <Dropdown overlay={menu}>
            <div className='userNav'>
              <UnorderedListOutlined style={{ fontSize: 30, paddingRight: 4 }} />
              <Avatar size="large" icon={<UserOutlined />} />
            </div>
          </Dropdown>
        </Space>
      </div>
      <div className='carouselContent'>
        <Row>
          <Col span={12}>
            <h1>Airbnb</h1>
          </Col>
          <Col span={12}>
            <div className='formTimKiem'>
              {TimeRelatedForm()}
            </div>
          </Col>
        </Row>
      </div>

    </div>
  )
}
