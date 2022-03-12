import React from 'react'
import { Form, DatePicker, InputNumber, Button, Select } from 'antd'
import { EnvironmentOutlined } from '@ant-design/icons'
import { actGetValueSearch } from '../../../../reducer/moduleValueSearch/action'
import { useDispatch } from 'react-redux'

export default function FormTimKiem(props) {
    const dispatch = useDispatch()

    const { arr } = props
    const renderViTri = () => {
        return arr?.map((viTri) => {
            return (
                <>
                    <Select.Option key={viTri.id} value={viTri.province}>{viTri.province}, {viTri.country}</Select.Option>
                </>
            )
        })
    }

    const onFinished = (fieldsValue) => {
        const values = {
            ...fieldsValue,
            'check-in-date': fieldsValue['check-in-date'].format('DD-MM-YYYY'),
            'check-out-date': fieldsValue['check-out-date'].format('DD-MM-YYYY'),
            'number-customer': fieldsValue['number-customer'],
            'select-location': fieldsValue['select-location']
        }
        dispatch(actGetValueSearch(values))
    }
    return (
        <Form
            className='formTimKiemNoiDung'
            layout='vertical'
            onFinish={onFinished}
        >
            <Form.Item
                label="Địa điểm"
                name="select-location"
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
                name="check-in-date"
                rules={
                    [
                        {
                            required: true,
                            message: "Hãy chọn ngày nhận phòng"
                        }
                    ]
                }
            >
                <DatePicker style={{ width: "90%" }} />
            </Form.Item>
            <Form.Item
                label="Ngày trả phòng"
                name="check-out-date"
                rules={
                    [
                        {
                            required: true,
                            message: "Hãy chọn ngày nhận phòng"
                        }
                    ]
                }
            >
                <DatePicker style={{ width: "90%" }} />
            </Form.Item>
            <Form.Item label="Số lượng khách" name="number-customer"
                rules={[
                    {
                        required: true,
                        message: "Hãy nhập số lượng khách"
                    }
                ]}>
                <InputNumber min={1} max={20} style={{ width: "90%" }} />
            </Form.Item>
            <Button htmlType="submit" className='buttonSubmit' onClick={() => {
                window.location.href = "/danh-sach-phong-o"
            }}>
                Tìm kiếm
            </Button>
        </Form>
    )
}
