import React from 'react'
import { Form, DatePicker, InputNumber, Button, Select } from 'antd'
import { EnvironmentOutlined } from '@ant-design/icons'
import moment from 'moment'
import { actGetValueSearch } from '../../../../reducer/moduleValueSearch/action'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function FormTimKiem(props) {
    const dispatch = useDispatch()
    const history = useHistory()
    const { arr } = props

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

    const onFinished = (fieldsValue) => {
        const values = {
            ...fieldsValue,
            'checkInDate': fieldsValue['checkInDate'],
            'checkOutDate': fieldsValue['checkOutDate'],
            'numberCustomer': fieldsValue['numberCustomer'],
            'selectLocation': fieldsValue['selectLocation']
        }
        dispatch(actGetValueSearch(values));
        history.push('/danh-sach-phong-o')
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
                <DatePicker format="DD-MM-YYYY" style={{ width: "90%" }} defaultValue={moment(new Date(), "MM-DD-YYYY")} />
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
                <DatePicker format="DD-MM-YYYY" style={{ width: "90%" }} defaultValue={moment(new Date(), "MM-DD-YYYY")}/>
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
