import React from 'react'
import { Form, Select, DatePicker, Row, Col, InputNumber, Button } from "antd"
import { EnvironmentOutlined } from "@ant-design/icons"
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import {actGetValueSearch} from "../../../../reducer/moduleValueSearch/action"
import { useHistory } from 'react-router-dom'

export default function FormDanhSachPhongO(props) {
    const prevValues = useSelector(state => state.getValueSearchReducer.value)
    const history = useHistory()
    const dispatch = useDispatch()
    const { arr } = props

    let _idFind
    const getID = (values)=>{
        return arr?.map((viTri) => {
            if (`${viTri.province}, ${viTri.country}` === values.selectLocation) {
                _idFind = viTri._id
            }
            else {
                return
            }
        })
    }

    const numberCustomerPrev = prevValues?.numberCustomer
    const checkInDatePrev = prevValues?.checkInDate._d === undefined ? null : moment(prevValues?.checkInDate._d, "DD-MM-YYYY") 
    const checkOutDatePrev = prevValues?.checkOutDate._d === undefined ? null : moment(prevValues?.checkOutDate._d, "DD-MM-YYYY") 
    const selectLocationPrev = prevValues?.selectLocation

    const renderViTri = () => {
        return arr?.map((viTri, index) => {
            return (
                <React.Fragment key={index}>
                    <Select.Option
                        key={viTri.id}
                        value={`${viTri.province}, ${viTri.country}`}
                    >
                        {viTri.province}, {viTri.country}
                    </Select.Option>
                </React.Fragment>
            )
        })
    }

    const onFinish = (fieldsValue) => {
        const values = {
            ...fieldsValue,
            'selectLocation': fieldsValue['selectLocation'],
            'checkInDate': fieldsValue['checkInDate'],
            'checkOutDate': fieldsValue['checkOutDate'],
            'numberCustomer': fieldsValue['numberCustomer'],
        }
        dispatch(actGetValueSearch(values));
        getID(values)
        history.push(`/danh-sach-phong-o/${_idFind}`)
    }
    
    return (
        <div>
            <Form onFinish={onFinish}>
                <Form.Item
                    label="Địa điểm"
                    name="selectLocation"
                >
                    <Select
                        suffixIcon={<EnvironmentOutlined />}
                        style={{ width: "83%", marginLeft: 50 }}
                        defaultValue={selectLocationPrev}
                    >
                        {renderViTri()}
                    </Select>
                </Form.Item>
                <Row>
                    <Col span={12}>
                        <Form.Item
                            label="Ngày nhận phòng"
                            name="checkInDate"
                        >
                            <DatePicker
                                style={{ width: "72%" }}
                                format="DD-MM-YYYY"
                                defaultValue={checkInDatePrev}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Ngày trả phòng"
                            name="checkOutDate"
                        >
                            <DatePicker style={{ width: "72%" }} format="DD-MM-YYYY"
                                defaultValue={checkOutDatePrev}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item label="Số lượng khách" name="numberCustomer">
                    <InputNumber min={1} max={20} style={{ width: "87%", marginLeft: 12 }} defaultValue={numberCustomerPrev} />
                </Form.Item>
                <Button htmlType='submit' className='buttonSubmitPhongO'>Tìm kiếm</Button>
            </Form>
        </div>
    )
}
