import React, { useState } from 'react'
import { LoginOutlined } from '@ant-design/icons'
import { Modal } from 'antd'
import { Form, Input, Button } from 'antd'

export default function DangNhap() {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const showModal = () => {
        setIsModalVisible(true)
    }
    const handleOk = () => {
        setIsModalVisible(false)
    }
    const handleCancel = () => {
        setIsModalVisible(false)
    }

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <div type='button' onClick={showModal}>
                <LoginOutlined className='iconUser' />
                Đăng nhập
            </div>
            <Modal title="Đăng nhập" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="Đăng nhập">
                <Form
                    name="basic"
                    labelCol={{ span: 6 }}
                    // wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
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

                    <Form.Item wrapperCol={{ offset: 11 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}
