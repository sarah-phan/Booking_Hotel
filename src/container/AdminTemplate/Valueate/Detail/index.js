import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchDetailValueate, actUpdateValueate, actDeleteValuate, actResetData } from "./module/action";
import { Form, Input, Button, Select } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import Loading from "../../../../components/loading";

export default function AdminDetailValueate(props) {
  const [form] = Form.useForm()
  const [viewMode, setViewMode] = useState(false)
  const dispatch = useDispatch();
  const dataSource = useSelector((state) => state.getDetailValueateReducer.data) || {};
  const loading = useSelector((state) => state.getDetailValueateReducer.loading);

  useEffect(() => {
    dispatch(actResetData());
    let { id } = props.match.params;
    id !== 'new' && dispatch(actFetchDetailValueate(id));
    id !== 'new' && setTimeout(() => {
      setViewMode(true)
    }, 100)
    id === 'new' && form.setFieldsValue({
      "content": "",
    })
  }, []);

  useEffect(() => {
    form.setFieldsValue(dataSource)
  }, [dataSource]);

  const updateFieldValue = (key, iType = "text") => (value) => {
    const v = iType == "checkbox" ? value.target.checked
      : iType == "text" ? value.target.value : value
    form.setFieldsValue({
      [key]: v
    })
  }

  const handleSubmit = (values) => {
    dispatch(actUpdateValueate({
      ...dataSource,
      ...values
    }, (response) => {
      if (response._id) {
        props.history.push(`/admin/valueate/${response._id}`)
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
        "content": "",
        ...dataSource
      }}
      layout='vertical'
      onFinish={handleSubmit}
    >
      {loading && <Loading />}
      {viewMode && <div><Button
        onClick={() => setViewMode(false)}
      >Edit</Button>
      <Button
        onClick={() => dispatch(actDeleteValuate(dataSource._id, () => {
          props.history.push('/admin/valuates')
        }))}
      >Delete</Button></div>}
      <Form.Item
        label="Content"
        name="content"
        rules={[
          {
            required: true,
            message: "Please input valueate content",
          },
        ]}
      >
        <Input onChange={updateFieldValue("content")} disabled={viewMode} defaultValue={dataSource.content}/>
      </Form.Item>
      {!viewMode && <ButtonGroup>
        <Button type='primary' htmlType="submit">Submit</Button>
      </ButtonGroup>}
    </Form>
  );
}
