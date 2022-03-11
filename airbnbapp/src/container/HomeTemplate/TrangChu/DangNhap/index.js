import React, { useState } from 'react'
import { LoginOutlined, WindowsFilled } from '@ant-design/icons'
import { Alert, Modal } from 'antd'
import { Form, Input, Button } from 'antd'
import { actDangNhap } from './module/action'
import { useSelector, useDispatch } from 'react-redux'

export default function DangNhap() {
    const data = useSelector(state => state.dangNhapReducer.data)
    const error = useSelector(state => state.dangNhapReducer.error)
    const dispatch = useDispatch()
    
    let message = ""
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isAlertVisible, setIsAlertVisible] = useState(false)

    const showModal = () => {
        setIsModalVisible(true)
    }
    const onCancel = () => {
        setIsModalVisible(false)
    }
    const onFinish = (values) => {
        dispatch(actDangNhap(values))
        setIsAlertVisible(true)
    };

    const showMessage = () => {
        if (data !== null){
            return data
        }
        if (error !== null){
            return error
        }
    }
    const showType = () => {
        if (data !== null){
            return "success"
        }
        if (error !== null){
            return "error"
        }
    }
    const reloadPage = () => {
        window.location.reload()
    }
    return (
        <>
            <div type='button' onClick={showModal}>
                <LoginOutlined className='iconUser' />
                Đăng nhập
            </div>
            <Modal title="Đăng nhập" visible={isModalVisible} onCancel={onCancel} footer={null} afterClose={reloadPage}>
                {isAlertVisible ? (<Alert message={showMessage()} type={showType()} showIcon/>) : null}
                <br/>
                <Form
                    name="basic"
                    labelCol={{ span: 6 }}
                    // wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Hãy nhập email' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Mật khẩu"
                        name="password"
                        rules={[{ required: true, message: 'Hãy nhập mật khẩu' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 10 }}>
                        <Button style={{ marginTop: 15 }} type="primary" htmlType="submit" >
                            Đăng nhập
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}
