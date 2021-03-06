import React from 'react'
import { Form, DatePicker, InputNumber, Button, Select } from 'antd'
import { EnvironmentOutlined } from '@ant-design/icons'
import { actGetValueSearch } from '../../../../reducers/moduleValueSearch/action'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import moment from 'moment'

export default function FormTimKiem(props) {
    const dispatch = useDispatch()
    const history = useHistory()
    const { arr } = props
    let _idFind
    console.log(arr)
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


    const renderViTri = () => {
        return arr?.map((viTri, index) => {
            return (
                <Select.Option
                    key={index}
                    value={`${viTri.province}, ${viTri.country}`}
                >
                    {viTri.province}, {viTri.country}
                </Select.Option>
            )
        })
    }

    const onFinished = (fieldsValue) => {
        const values = {
            ...fieldsValue,
            'checkInDate': fieldsValue['checkInDate'],
            'checkOutDate': fieldsValue['checkOutDate'],
            'numberCustomer': fieldsValue['numberCustomer'],
            'selectLocation': fieldsValue['selectLocation']
        }
        dispatch(actGetValueSearch(values));
        getID(values)
        history.push(`/danh-sach-phong-o/${_idFind}`)

    }

    const disabledDate = (current) => {
        return current && current < moment().endOf('day');
    }

    return (
        <Form
            className='formTimKiemNoiDung'
            layout='vertical'
            onFinish={onFinished}
        >
            <Form.Item
                label="Địa điểm"
                name="selectLocation"
                rules={
                    [
                        {
                            required: true,
                            message: "Hãy chọn địa điểm"
                        }
                    ]
                }
            >
                <Select suffixIcon={<EnvironmentOutlined />} style={{ width: "90%" }}>
                    {renderViTri()}
                </Select>
            </Form.Item>
            <Form.Item
                label="Ngày nhận phòng"
                name="checkInDate"
                rules={
                    [
                        {
                            required: true,
                            message: "Hãy chọn ngày nhận phòng"
                        }
                    ]
                }
            >
                <DatePicker
                    format="DD-MM-YYYY"
                    style={{ width: "90%" }}
                    disabledDate={disabledDate}
                />
            </Form.Item>
            <Form.Item
                label="Ngày trả phòng"
                name="checkOutDate"
                rules={
                    [
                        {
                            required: true,
                            message: "Hãy chọn ngày trả phòng"
                        }
                    ]
                }
            >
                <DatePicker
                    format="DD-MM-YYYY"
                    style={{ width: "90%" }}
                    disabledDate={disabledDate}
                />
            </Form.Item>
            <Form.Item label="Số lượng khách" name="numberCustomer"
                rules={[
                    {
                        required: true,
                        message: "Hãy nhập số lượng khách"
                    }
                ]}>
                <InputNumber min={1} max={20} style={{ width: "90%" }} />
            </Form.Item>
            <Button htmlType="submit" className='buttonSubmit'>
                Tìm kiếm
            </Button>
        </Form>
    )
}
