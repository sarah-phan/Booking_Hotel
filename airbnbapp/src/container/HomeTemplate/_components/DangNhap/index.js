import React, { useState } from 'react'
import { LoginOutlined, WindowsFilled } from '@ant-design/icons'
import { Alert, Modal } from 'antd'
import { Form, Input, Button } from 'antd'
import { actDangNhap } from './../../../../reducers/moduleAuth/action'
import { useSelector, useDispatch } from 'react-redux'
import "./style.css"

export default function DangNhap() {
    const data = useSelector(state => state.authReducer.data)
    const error = useSelector(state => state.authReducer.error)
    const dispatch = useDispatch()

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
        if (data !== null) {
            return data
        }
        if (error !== null) {
            return error
        }
    }
    const showType = () => {
        if (data !== null) {
            return "success"
        }
        if (error !== null) {
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
            <Modal 
            title="Đăng nhập" 
            visible={isModalVisible} 
            onCancel={onCancel} 
            footer={null} 
            afterClose={reloadPage}
            className="modalLogin"
            >
                    {isAlertVisible ? (<Alert message={showMessage()} type={showType()} showIcon />) : null}
                    <br />
                    <Form
                        name="basic"
                        labelCol={{ span: 6 }}
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
                            style={{ marginBottom: 0 }}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 10 }}>
                            <Button style={{ margin: "20px 0px" }} type="primary" htmlType="submit" >
                                Đăng nhập
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
        </>
    )
}
