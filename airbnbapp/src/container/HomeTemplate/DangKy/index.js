import React from 'react'
import "./style.css"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"
import { UserAddOutlined } from "@ant-design/icons"

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
    .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g),
  birthday: yup
    .string()
    .required('Nhập ngày tháng năm sinh'),
  address: yup
    .string()
    .required('Nhập địa chỉ')

})

export default function DangKy() {
  const handleSubmit = (values) => {
    console.log(values)
  }
  return (
    <>
      <div className='dangKyBackground'></div>
      <div className='dangKyForm'>
        <h1>Airbnb</h1>
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
                  <Field type="date" id="birthday" name="birthday" />
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
                  <button type='submit' className='buttonDangKy'>
                    <UserAddOutlined />
                    <span style={{ marginLeft: 4 }}>Đăng ký</span>
                  </button>
                </div>
              </Form>
            )}
          />
        </div>
      </div>
    </>


  )
}
