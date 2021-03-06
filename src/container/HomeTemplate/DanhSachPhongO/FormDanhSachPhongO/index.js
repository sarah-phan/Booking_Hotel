import React from 'react'
import { Form, Select, DatePicker, Row, Col, InputNumber, Button } from "antd"
import { EnvironmentOutlined } from "@ant-design/icons"
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { actGetValueSearch } from "../../../../reducers/moduleValueSearch/action"
import { useHistory } from 'react-router-dom'

export default function FormDanhSachPhongO(props) {
    const prevValues = useSelector(state => state.getValueSearchReducer.value)
    const history = useHistory()
    const dispatch = useDispatch()
    const { arr } = props

    let _idFind
    const getID = (values) => {
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

    const disabledDate = (current) => {
        return current && current < moment().endOf('day');
    }
    return (
        <div>
            <Form
                onFinish={onFinish}
                initialValues={{
                    ['selectLocation']: selectLocationPrev,
                    ['checkInDate']: checkInDatePrev,
                    ['checkOutDate']: checkOutDatePrev,
                    ['numberCustomer']: numberCustomerPrev
                }}
            >
                <Form.Item
                    label="?????a ??i???m"
                    name="selectLocation"
                    rules={
                        [
                            {
                                required: true,
                                message: "H??y ch???n ?????a ??i???m"
                            }
                        ]
                    }
                >
                    <Select
                        suffixIcon={<EnvironmentOutlined />}
                        style={{ width: "83%", marginLeft: 63 }}
                    >
                        {renderViTri()}
                    </Select>
                </Form.Item>
                <Row>
                    <Col sm={24} lg={12}>
                        <Form.Item
                            label="Ng??y nh???n ph??ng"
                            name="checkInDate"
                            rules={
                                [
                                    {
                                        required: true,
                                        message: "H??y ch???n ng??y nh???n ph??ng"
                                    }
                                ]
                            }
                        >
                            <DatePicker
                                format="DD-MM-YYYY"
                                disabledDate={disabledDate}
                            />
                        </Form.Item>
                    </Col>
                    <Col sm={24} lg={12}>
                        <Form.Item
                            className='checkOutClass'
                            label="Ng??y tr??? ph??ng"
                            name="checkOutDate"
                            rules={
                                [
                                    {
                                        required: true,
                                        message: "H??y ch???n ng??y tr??? ph??ng"
                                    }
                                ]
                            }
                        >
                            <DatePicker 
                            format="DD-MM-YYYY" 
                            disabledDate={disabledDate}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item
                    label="S??? l?????ng kh??ch"
                    name="numberCustomer"
                    defaultValue={numberCustomerPrev}
                    rules={[
                        {
                            required: true,
                            message: "H??y nh???p s??? l?????ng kh??ch"
                        }
                    ]}
                >
                    <InputNumber min={1} max={20} style={{ width: "87%", marginLeft: 12 }} />
                </Form.Item>
                <Button htmlType='submit' className='buttonSubmitListPhong'>T??m ki???m</Button>
            </Form>
        </div>
    )
}
