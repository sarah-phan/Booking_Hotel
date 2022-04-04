import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchDetailLocation, actUpdateLocation, actUploadLocationImage
  , actDeleteLocation, actResetData
} from "./module/action";
import { Form, Input, Button, Select } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import Loading from "../../../../components/loading";

const { Option } = Select;

export default function AdminDetailLocation(props) {
  const [form] = Form.useForm()
  const [imageSrc, setImgSrc] = useState("");
  const [viewMode, setViewMode] = useState(false)
  const dispatch = useDispatch();
  const dataSource = useSelector((state) => state.getDetailLocationReducer.data) || {};
  const loading = useSelector((state) => state.getDetailLocationReducer.loading);
  const { id } = props.match.params;

  useEffect(() => {
    dispatch(actResetData());
    id !== 'new' && dispatch(actFetchDetailLocation(id));
    id !== 'new' && setViewMode(true)
    id === 'new' && form.setFieldsValue({
      "name": "",
      "province": "",
      "country": "",
      "valueate": 1,
    })
  }, [id]);

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

  useEffect(() => {
    setImgSrc(dataSource.image)
  }, [dataSource.image])

  const handleChangeFile = (e) => {
    // lay file ra tu e
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/gif" ||
      file.type === "image/png"
    ) {
      // dem du lieu file luu vao formik
      //tao doi tuong de doc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result); // hinh base 64
      };
    }
  };

  const handleSubmit = (values) => {
    dispatch(actUpdateLocation({
      ...dataSource,
      ...values
    }, (response) => {
      response._id && imageSrc && dispatch(actUploadLocationImage(response._id, imageSrc, () => {
        props.history.push(`/admin/location/${response._id}`)
        window.location.reload()
      }))
      if (response._id && !imageSrc) {
        props.history.push(`/admin/location/${response._id}`)
        window.location.reload()
      }
    }))
  }

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      form={form}
      wrapperCol={{
        span: 14,
      }}
      initialValues={{
        "name": "",
        "province": "",
        "country": "",
        "valueate": 1,
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
        onClick={() => dispatch(actDeleteLocation(dataSource._id, () => {
          props.history.push('/admin/location')
        }))}
      >Delete</Button></div>}
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input location name",
          },
        ]}
      >
        <Input onChange={updateFieldValue("name")} disabled={viewMode} defaultValue={dataSource.name} />
      </Form.Item>
      <Form.Item
        label="Province"
        name="province"
        rules={[
          {
            required: true,
            message: "Please input location province",
          },
        ]}
      >
        <Input onChange={updateFieldValue("province")} disabled={viewMode} defaultValue={dataSource.province} />
      </Form.Item>
      <Form.Item
        label="Country"
        name="country"
        rules={[
          {
            required: true,
            message: "Please input location country",
          },
        ]}
      >
        <Input onChange={updateFieldValue("country")} disabled={viewMode} defaultValue={dataSource.country} />
      </Form.Item>
      <Form.Item
        label="Valueate"
        name="valueate"
        rules={[]}
      >
        <Select onChange={updateFieldValue("valueate", "select")} disabled={viewMode} defaultValue={dataSource.valueate || "1"} style={{ width: 120 }}>
          <Option value={1}>1 point</Option>
          <Option value={2}>2 points</Option>
          <Option value={3}>3 points</Option>
          <Option value={4}>4 points</Option>
          <Option value={5}>5 points</Option>
          <Option value={6}>6 points</Option>
          <Option value={7}>7 points</Option>
          <Option value={8}>8 points</Option>
          <Option value={9}>9 points</Option>
          <Option value={10}>10 points</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Image"
        name="image"
        rules={[]}
      >
        {!viewMode && <input
          type="file"
          onChange={handleChangeFile}
          accept="image/png, image/jpeg,image/gif,image/png"
        />}
        <br />
        {imageSrc && <img width={100} height={100} src={imageSrc} />}
      </Form.Item>
      {!viewMode && <ButtonGroup>
        <Button type='primary' htmlType="submit">Submit</Button>
      </ButtonGroup>}
    </Form>
  );
}
