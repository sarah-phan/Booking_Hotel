import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchDetailUserAdmin, actUpdateUserAdmin, actDeleteUser, actResetData } from "./module/action";
import { Form, Input, Button, DatePicker, Select } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import Loading from "../../../../components/loading";
import moment from "moment";

export default function AdminDetailUserAdmin(props) {
  const [form] = Form.useForm()
  const [viewMode, setViewMode] = useState(false)
  const dispatch = useDispatch();
  const dataSource = useSelector((state) => state.getDetailUserAdminReducer.data) || {};
  const loading = useSelector((state) => state.getDetailUserAdminReducer.loading);
  const { id } = props.match.params;

  useEffect(() => {
    dispatch(actResetData());
    id !== 'new' && dispatch(actFetchDetailUserAdmin(id));
    id !== 'new' && setTimeout(() => {
      setViewMode(true)
    }, 100)
    id === 'new' && form.setFieldsValue({
      "name": "",
      "email": "",
      "phone": "",
      "birthday": "",
      "gender": false,
      "address": "",
      "type": "ADMIN"
    })
  }, []);

  useEffect(() => {
    form.setFieldsValue({
      ...dataSource,
      birthday: moment(dataSource.birthday, 'YYYY-MM-DDTHH:mm:ss.sssZ')
    })
}, [dataSource]);

  const updateFieldValue = (key, iType = "text") => (value) => {
    const v = iType == "checkbox" ? value.target.checked
      : iType == "text" ? value.target.value : value
    form.setFieldsValue({
      [key]: v
    })
  }

  const handleSubmit = (values) => {
    const dataSubmit = {
      ...dataSource,
      ...values
    }
    dispatch(actUpdateUserAdmin(dataSubmit, (response) => {
      if (response._id) {
        props.history.push(`/admin/users/${response._id}`)
        window.location.reload()
      }
    }))
  }

  return (
    <Form
      form={form}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      initialValues={{
        "name": "",
        "email": "",
        "phone": "",
        "birthday": "",
        "gender": false,
        "address": "",
        "type": "ADMIN"
      }}
      layout='vertical'
      onFinish={handleSubmit}
    >
      {loading && <Loading />}
      {viewMode && <div><Button
        onClick={() => setViewMode(false)}
      >Edit</Button>
      <Button
        onClick={() => dispatch(actDeleteUser(dataSource._id, () => {
          props.history.push('/admin/users')
        }))}
      >Delete</Button>
      </div>}
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input user name",
          },
        ]}
      >
        <Input onChange={updateFieldValue("name")} disabled={viewMode} defaultValue={dataSource.name}/>
      </Form.Item>
      <Form.Item
        label="Phone"
        name="phone"
        rules={[
          {
            required: true,
            message: "Please input phone",
          },
        ]}
      >
        <Input onChange={updateFieldValue("phone")} disabled={viewMode} defaultValue={dataSource.name}/>
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input email",
          },
        ]}
      >
        <Input type='email' onChange={updateFieldValue("email")} disabled={viewMode} defaultValue={dataSource.name}/>
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input password",
          },
        ]}
      >
        <Input type='password' onChange={updateFieldValue("password")} disabled={viewMode} defaultValue={dataSource.name}/>
      </Form.Item>
      <Form.Item
        label="Birthday"
        name="birthday"
        rules={[
          {
            required: true,
            message: "Please input birthday",
          },
        ]}
      >
        <DatePicker
          onChange={updateFieldValue("birthday")}
          disabled={viewMode}
          format={'DD/MM/YYYY'}
        />
      </Form.Item>
      <Form.Item
        label="Birthday"
        name="birthday"
        rules={[
          {
            required: true,
            message: "Please input birthday",
          },
        ]}
      >
        <Select
          options={[{
            key: 'CLIENT',
            value: 'CLIENT',
            label: 'CLIENT'
          }, {
            key: 'ADMIN',
            value: 'ADMIN',
            label: 'ADMIN'
          }]}
        />
      </Form.Item>
      {!viewMode && <ButtonGroup>
        <Button type='primary' htmlType="submit">Submit</Button>
      </ButtonGroup>}
    </Form>
  );
}
