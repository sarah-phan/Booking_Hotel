import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchDetailLocation } from "./module/action";
import { useFormik } from "formik";
import { Form, Input, Button, Radio, Select, Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

export default function AdminDetailLocation(props) {
  const [imageSrc, setImgSrc] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    let { id } = props.match.params;
    dispatch(actFetchDetailLocation(id));
  }, []);

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
        // console.log(e.target.result);
        setImgSrc(e.target.result); // hinh base 64
      };
      // dem du lieu file luu vao formik
      // formik.setFieldValue("hinhAnh", file);
    }
  };

  return (
    <Form
      //   onSubmitCapture={formik.handleSubmit}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={
        {
          // size: componentSize,
        }
      }
      //   onValuesChange={onFormLayoutChange}
      //   size={componentSize}
    >
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
        <Input />
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
        <Input />
      </Form.Item>
      <Form.Item
        label="Country"
        name="country"
        rules={[
          {
            required: true,
            message: "Please input country location",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Valueate"
        name="valueate"
        rules={[
          {
            required: true,
            message: "Please input location name",
          },
        ]}
      >
        <Select defaultValue="1" style={{ width: 120 }}>
          <Option value="1">1 Star</Option>
          <Option value="2">2 Star</Option>
          <Option value="3">3 Star</Option>
          <Option value="4">4 Star</Option>
          <Option value="5">5 Star</Option>
          <Option value="6">6 Star</Option>
          <Option value="7">7 Star</Option>
          <Option value="8">8 Star</Option>
          <Option value="9">9 Star</Option>
          <Option value="10">10 Star</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Image"
        name="image"
        rules={[
          {
            required: true,
            message: "Please input location name",
          },
        ]}
      >
        <input
          type="file"
          onChange={handleChangeFile}
          accept="image/png, image/jpeg,image/gif,image/png"
        />
        <br />
        <img width={100} height={100} src={imageSrc} />
      </Form.Item>
    </Form>
  );
}
