import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchDetailRoom, actUpdateRoom, actGetLocations
  , actDeleteRoom, actResetData
} from "./module/action";
import { Form, Input, Button, Select } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import Loading from "../../../../components/loading";

export default function AdminDetailRoom(props) {
  const [form] = Form.useForm()
  const [viewMode, setViewMode] = useState(false)
  const dispatch = useDispatch();
  const dataSource = useSelector((state) => state.getAdminDetailRoomReducer.data) || {};
  const locations = useSelector((state) => state.getAdminDetailRoomReducer.locations) || [];
  const loading = useSelector((state) => state.getAdminDetailRoomReducer.loading);
  const { id } = props.match.params;

  useEffect(() => {
    dispatch(actResetData());
    dispatch(actGetLocations())
    id !== 'new' && dispatch(actFetchDetailRoom(id));
    id !== 'new' && setViewMode(true)
    id === 'new' && form.setFieldsValue({
      "name": "",
      "guests": 0,
      "bedRoom": 0,
      "bath": 0,
      "description": "",
      "price": 0,
      "elevator": false,
      "hotTub": false,
      "pool": false,
      "indoorFireplace": false,
      "dryer": false,
      "gym": false,
      "kitchen": false,
      "wifi": false,
      "heating": false,
      "cableTV": false
    })
  }, [id]);

  useEffect(() => {
    const newDs = {
      ...dataSource,
      locationId: dataSource.locationId?._id || ''
    }
    // Bị lỗi trả về thiếu _id trong locationId trong room
    if (dataSource.locationId && !newDs.locationId) {
      newDs.locationId = (locations || []).find(
        (item) => (
          item.image && item.image === dataSource.locationId.image)
        )?._id
    }
    form.setFieldsValue(newDs)
}, [dataSource, locations]);

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
    if (typeof dataSubmit.locationId === 'string') {
      dataSubmit.locationId = (locations || []).find(item => item._id == dataSubmit.locationId)
    }
    dispatch(actUpdateRoom(dataSubmit, (response) => {
      if (response._id) {
        props.history.push(`/admin/room/${response._id}`)
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
        "guests": 0,
        "bedRoom": 0,
        "bath": 0,
        "description": "",
        "price": 0,
        "elevator": false,
        "hotTub": false,
        "pool": false,
        "indoorFireplace": false,
        "dryer": false,
        "gym": false,
        "kitchen": false,
        "wifi": false,
        "heating": false,
        "cableTV": false,
        ...dataSource,
        locationId: dataSource.locationId?._id || ''
      }}
      layout='vertical'
      onFinish={handleSubmit}
    >
      {loading && <Loading />}
      {viewMode && <div><Button
        onClick={() => setViewMode(false)}
      >Edit</Button>
      <Button
        onClick={() => dispatch(actDeleteRoom(dataSource._id, () => {
          props.history.push('/admin/rooms')
        }))}
      >Delete</Button></div>}
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input room name",
          },
        ]}
      >
        <Input onChange={updateFieldValue("name")} disabled={viewMode} defaultValue={dataSource.name}/>
      </Form.Item>
      <Form.Item
        label="Guests"
        name="guests"
        rules={[
          {
            required: true,
            message: "Please input room guests",
          },
        ]}
      >
        <Input onChange={updateFieldValue("guests")} type={'number'} disabled={viewMode} defaultValue={dataSource.guests}  />
      </Form.Item>
      <Form.Item
        label="Bed rooms"
        name="bedRoom"
        rules={[
          {
            required: true,
            message: "Please input room bedRoom",
          },
        ]}
      >
        <Input onChange={updateFieldValue("bedRoom")} type={'number'} disabled={viewMode} defaultValue={dataSource.bedRoom}  />
      </Form.Item>
      <Form.Item
        label="Path"
        name="bath"
        rules={[
          {
            required: true,
            message: "Please input room bath",
          },
        ]}
      >
        <Input onChange={updateFieldValue("bath")} type={'number'} disabled={viewMode} defaultValue={dataSource.bath} />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[
          {
            required: true,
            message: "Please input room description",
          },
        ]}
      >
        <Input onChange={updateFieldValue("description")} disabled={viewMode} defaultValue={dataSource.description} />
      </Form.Item>
      <Form.Item
        label="Price"
        name="price"
        rules={[
          {
            required: true,
            message: "Please input room price",
          },
        ]}
      >
        <Input onChange={updateFieldValue("price")} type={'number'} disabled={viewMode} defaultValue={dataSource.price} />
      </Form.Item>
      <Form.Item
        label="Elevator"
        name="elevator"
      >
        <Input onChange={updateFieldValue("elevator", "checkbox")} type={'checkbox'} disabled={viewMode} defaultChecked={dataSource.elevator} />
      </Form.Item>
      <Form.Item
        label="Pool"
        name="pool"
      >
        <Input onChange={updateFieldValue("pool", "checkbox")} type={'checkbox'} disabled={viewMode}
          defaultChecked={dataSource.pool} />
      </Form.Item>
      
      <Form.Item
        label="Indoor fireplace"
        name="indoorFireplace"
      >
        <Input onChange={updateFieldValue("indoorFireplace", "checkbox")} type={'checkbox'} disabled={viewMode}
          defaultChecked={dataSource.indoorFireplace} />
      </Form.Item>
      
      <Form.Item
        label="Dryer"
        name="dryer"
      >
        <Input onChange={updateFieldValue("dryer", "checkbox")} type={'checkbox'} disabled={viewMode}
          defaultChecked={dataSource.dryer} />
      </Form.Item>
      
      <Form.Item
        label="GYM"
        name="gym"
      >
        <Input onChange={updateFieldValue("gym", "checkbox")} type={'checkbox'} disabled={viewMode}
          defaultChecked={dataSource.gym} />
      </Form.Item>
      
      <Form.Item
        label="Kitchen"
        name="kitchen"
      >
        <Input onChange={updateFieldValue("kitchen", "checkbox")} type={'checkbox'} disabled={viewMode}
          defaultChecked={dataSource.kitchen} />
      </Form.Item>
      
      <Form.Item
        label="Hot tub"
        name="hotTub"
      >
        <Input onChange={updateFieldValue("hotTub", "checkbox")} type={'checkbox'} disabled={viewMode}
          defaultChecked={dataSource.hotTub} />
      </Form.Item>
      
      <Form.Item
        label="WIFI"
        name="wifi"
      >
        <Input onChange={updateFieldValue("wifi", "checkbox")} type={'checkbox'} disabled={viewMode}
          defaultChecked={dataSource.wifi} />
      </Form.Item>
      
      <Form.Item
        label="Heating"
        name="heating"
      >
        <Input onChange={updateFieldValue("heating", "checkbox")} type={'checkbox'} disabled={viewMode}
          defaultChecked={dataSource.heating} />
      </Form.Item>
      
      <Form.Item
        label="Cable TV"
        name="cableTV"
      >
        <Input onChange={updateFieldValue("cableTV", "checkbox")} type={'checkbox'} disabled={viewMode}
          defaultChecked={dataSource.cableTV} />
      </Form.Item>
      
      <Form.Item
        label="Location"
        name="locationId"
      >
        <Select
          disabled={viewMode}
          onChange={updateFieldValue("locationId", "select")}
          options={(locations || []).map(item => ({ ...item, value: item._id, label: item.name, key: item._id }))}
        />
      </Form.Item>
      {!viewMode && <ButtonGroup>
        <Button type='primary' htmlType="submit">Submit</Button>
      </ButtonGroup>}
    </Form>
  );
}
