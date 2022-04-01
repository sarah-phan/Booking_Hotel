import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchDetailTicket, actUpdateTicket
  , actGetRooms, actGetUsers
} from "./module/action";
import { Form, Input, Button, Select, DatePicker } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import Loading from "../../../../components/loading";
import moment from "moment";

export default function AdminDetailTicket(props) {
  const [form] = Form.useForm()
  const [viewMode, setViewMode] = useState(false)
  const dispatch = useDispatch();
  const dataSource = useSelector((state) => state.getDetailTicketReducer.data) || {};
  const rooms = useSelector((state) => state.getDetailTicketReducer.rooms) || [];
  const users = useSelector((state) => state.getDetailTicketReducer.users) || [];
  const loading = useSelector((state) => state.getDetailTicketReducer.loading);

  useEffect(() => {
    dispatch(actGetRooms())
    dispatch(actGetUsers())
    let { id } = props.match.params;
    id !== 'new' && dispatch(actFetchDetailTicket(id));
    id !== 'new' && setTimeout(() => {
      setViewMode(true)
    }, 100)
  }, []);

  useEffect(() => {
    form.setFieldsValue({
      ...dataSource,
      checkIn: moment(dataSource.checkIn, 'YYYY-MM-DDTTHH:mm:ss.sssZ'),
      checkOut: moment(dataSource.checkOut, 'YYYY-MM-DDTTHH:mm:ss.sssZ'),
      userId: dataSource.userId?._id,
      roomId: dataSource.roomId?._id,
    })
  }, [dataSource]);

  const updateFieldValue = (key, iType = "text", options = {}) => (value) => {
    const { getFullObj = false, options = [] } = options
    let v = iType == "checkbox" ? value.target.checked
      : iType == "text" ? value.target.value : value
    if (getFullObj && options) {
      v = options.find(item => item._id === v)?._id || ''
    }
    form.setFieldsValue({
      [key]: v
    })
  }

  const handleSubmit = (values) => {
    const dataSubmit = {
      ...dataSource,
      ...values
    }
    if (typeof dataSubmit.userId == 'string') {
      dataSubmit.userId = users.find(item => item._id == dataSubmit.userId)
    }
    if (typeof dataSubmit.roomId == 'string') {
      dataSubmit.roomId = rooms.find(item => item._id == dataSubmit.roomId)
    }
    dataSubmit.checkIn = moment(dataSubmit.checkIn, 'DD/MM/YYYY HH:mm:ss').format('YYYY-MM-DDTHH:mm:ss.sssZ')
    dataSubmit.checkOut = moment(dataSubmit.checkOut, 'DD/MM/YYYY HH:mm:ss').format('YYYY-MM-DDTHH:mm:ss.sssZ')
    dispatch(actUpdateTicket(dataSubmit, (response) => {
      if (response._id) {
        props.history.push(`/admin/ticket/${response._id}`)
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
        "userId": dataSource.userId?._id || '',
        "roomId": dataSource.roomId?._id || '',
      }}
      layout='vertical'
      onFinish={handleSubmit}
    >
      {loading && <Loading />}
      {viewMode && <div><Button
        onClick={() => setViewMode(false)}
      >Edit</Button></div>}
      <Form.Item
        label="CheckIn"
        name="checkIn"
        rules={[
          {
            required: true,
            message: "Please input ticket checkIn",
          },
        ]}
      >
        <DatePicker onChange={updateFieldValue("checkIn", "date")}
          disabled={viewMode}
          defaultValue={moment(dataSource.checkIn, 'YYYY-MM-DDTHH:mm:ss.sssZ')}
          showTime
          format={'DD/MM/YYYY HH:mm:ss'}
        />
      </Form.Item>
      <Form.Item
        label="Checkout"
        name="checkOut"
        rules={[
          {
            required: true,
            message: "Please input ticket checkout",
          },
        ]}
      >
        <DatePicker onChange={updateFieldValue("checkOut", "date")}
          disabled={viewMode}
          defaultValue={moment(dataSource.checkOut, 'YYYY-MM-DDTHH:mm:ss.sssZ')}
          showTime
          format={'DD/MM/YYYY HH:mm:ss'}
        />
      </Form.Item>
      <Form.Item
        label="User"
        name="userId"
        rules={[
          {
            required: true,
            message: "Please select ticket user",
          },
        ]}
      >
        <Select
          defaultValue={dataSource.userId?._id}
          disabled={viewMode}
          onChange={updateFieldValue("userId", "select", { getFullObj: true, options: users })}
          options={(users || []).map((item) => ({ ...item, key: item._id, value: item._id, label: item.name }))}
        />
      </Form.Item>
      <Form.Item
        label="Room"
        name="roomId"
        rules={[
          {
            required: true,
            message: "Please select ticket user",
          },
        ]}
      >
        <Select
          defaultValue={dataSource.roomId?._id}
          disabled={viewMode}
          onChange={updateFieldValue("roomId", "select", { getFullObj: true, options: rooms })}
          options={(rooms || []).map((item) => ({ ...item, key: item._id, value: item._id, label: item.name }))}
        />
      </Form.Item>
      {!viewMode && <ButtonGroup>
        <Button type='primary' htmlType="submit">Submit</Button>
      </ButtonGroup>}
    </Form>
  );
}
