import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./style.css"
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik"
import * as yup from "yup"
import { UserAddOutlined } from "@ant-design/icons"
import { actDangKy } from './module/action'
import { NavLink } from 'react-router-dom'
import { DatePicker, Modal } from 'antd'
import moment from 'moment'

export default function DangKy(props) {
  const { history } = props

  const errorThongBao = useSelector(state => state.dangKyReducer.error)
  const dataSource = useSelector(state => state.dangKyReducer.data)
  const dispatch = useDispatch()

  const handleSubmit = (values) => {
    dispatch(actDangKy(values))
  }

  const signupUserSchema = yup.object().shape({
    name: yup
      .string()
      .required('Nhập họ và tên'),
    email: yup
      .string()
      .required('Nhập email')
      .email('Email không đúng định dạng'),
    password: yup
      .string()
      .required('Nhập mật khẩu'),
    phone: yup
      .string()
      .required('Nhập số điện thoại')
      .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, "Nhập đúng định dạng số điện thoại"),
    birthday: yup
      .string()
      .required('Nhập ngày tháng năm sinh'),
    address: yup
      .string()
      .required('Nhập địa chỉ')
  })

  const [isShowModal, setIsShowModal] = useState(false)
  const showModal = () => {
    setIsShowModal(true)
  }
  const handleOk = () => {
    setIsShowModal(false);
    history.push("/")
  }
  const handleCancle = () => {
    setIsShowModal(false)
  }


  const showMessage = () => {
    if (errorThongBao === null) {
      return (
        <p>Đăng ký tài khoản thành công</p>
      )
    }
    else {
      return (
        <p>{errorThongBao}</p>
      )
    }
  }

  return (
    <>
      <div className='dangKyBackground'></div>
      <div className='dangKyForm'>
        <NavLink to={"/"}>
          <h1>Airbnb</h1>
        </NavLink>
        <div className='dangKyContent'>
          <h2>Đăng ký</h2>
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              phone: '',
              birthday: '',
              gender: true,
              address: '',
            }}
            onSubmit={handleSubmit}
            validationSchema={signupUserSchema}
            render={(formikProps) => (
              <Form>
                <div>
                  <label htmlFor='name'>Họ và tên: </label>
                  <Field type="text" id="name" name="name" onChange={formikProps.handleChange} />
                  <ErrorMessage name='name'>
                    {
                      (msg) => <div className='error'>{msg}</div>
                    }
                  </ErrorMessage>
                </div>
                <div>
                  <label htmlFor='email'>Email: </label>
                  <Field type="email" id="email" name="email" />
                  <ErrorMessage name='email'>
                    {
                      (msg) => <div className='error'>{msg}</div>
                    }
                  </ErrorMessage>
                </div>
                <div>
                  <label htmlFor='password'>Mật khẩu: </label>
                  <Field type="password" id="password" name="password" />
                  <ErrorMessage name='password'>
                    {
                      (msg) => <div className='error'>{msg}</div>
                    }
                  </ErrorMessage>
                </div>
                <div>
                  <label htmlFor='phone'>Số điện thoại:</label>
                  <Field type="text" id="phone" name="phone" />
                  <ErrorMessage name='phone'>
                    {
                      (msg) => <div className='error'>{msg}</div>
                    }
                  </ErrorMessage>
                </div>
                <div>
                  <label htmlFor='birthday'>Ngày tháng năm sinh: </label>
                  <Field id="birthday" name="birthday"
                    render={({ field, form }) => {
                      return (
                        <div>
                          <DatePicker
                            format={'DD/MM/YYYY'}
                            onChange={(value) => formikProps.setFieldValue('birthday', moment(value).format('DD/MM/YYYY'))}
                          />
                        </div>
                      )
                    }}
                  />
                  <ErrorMessage name='birthday'>
                    {
                      (msg) => <div className='error'>{msg}</div>
                    }
                  </ErrorMessage>
                </div>
                <div>
                  <label htmlFor='gender'>Giới tính: </label>
                  <Field component="select" id="gender" name="gender" >
                    <option value={true}>Nam</option>
                    <option value={false}>Nữ</option>
                  </Field>
                </div>
                <div>
                  <label htmlFor='address'>Địa chỉ:</label>
                  <Field type="text" id="address" name="address" />
                  <ErrorMessage name='address'>
                    {
                      (msg) => <div className='error'>{msg}</div>
                    }
                  </ErrorMessage>
                </div>
                <div>
                  <button type='submit' className='buttonDangKy' onClick={showModal}>
                    <UserAddOutlined />
                    <span style={{ marginLeft: 4 }}>Đăng ký</span>
                  </button>
                </div>
              </Form>
            )}
          />
        </div>
      </div>
      <Modal visible={isShowModal} onOk={handleOk} onCancel={handleCancle}>
        {showMessage()}
      </Modal>
    </>
  )
}
