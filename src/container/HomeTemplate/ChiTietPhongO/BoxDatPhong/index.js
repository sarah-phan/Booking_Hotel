import {
  Alert,
  Button,
  Col,
  DatePicker,
  Form,
  InputNumber,
  Modal,
  Row,
} from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { actGetValueSearch } from "../../../../reducers/moduleValueSearch/action";
import { useHistory } from "react-router-dom";

export default function BoxDatPhong(props) {
  const prevValues = useSelector((state) => state.getValueSearchReducer.value);
  const dispatch = useDispatch();
  const history = useHistory();
  const { price, location, id, guests } = props;
  var formatter = new Intl.NumberFormat("VND", {
    style: "currency",
    currency: "VND",
  });
  const [isModalVisible, setIsModalVisible] = useState(false);

  const numberCustomerPrev = prevValues?.numberCustomer;
  const checkInDatePrev =
    prevValues?.checkInDate._d === undefined
      ? null
      : moment(prevValues?.checkInDate._d, "DD-MM-YYYY");
  const checkOutDatePrev =
    prevValues?.checkOutDate._d === undefined
      ? null
      : moment(prevValues?.checkOutDate._d, "DD-MM-YYYY");

  const auth = useSelector((state) => state.authReducer.data);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const onFinishWithoutValue = (fieldsValue) => {
    const values = {
      ...fieldsValue,
      checkInDate: fieldsValue["checkInDate"],
      checkOutDate: fieldsValue["checkOutDate"],
      numberCustomer: fieldsValue["numberCustomer"],
      selectLocation: location,
    };
    dispatch(actGetValueSearch(values));
    history.push(`/chi-tiet-phong-o/${id}`);
  };
  const onFinishWithValue = (fieldsValue) => {
    const values = {
      ...fieldsValue,
      checkInDate: fieldsValue["checkInDate"],
      checkOutDate: fieldsValue["checkOutDate"],
      numberCustomer: fieldsValue["numberCustomer"],
      selectLocation: location,
    };
    dispatch(actGetValueSearch(values));
    if (!auth) {
      showModal();
    } else {
      history.push(`/chi-tiet-phong-o/${id}/xac-nhan`);
    }
  };
  const disabledDate = (current) => {
    return current && current < moment().endOf("day");
  };
  const formLayout = () => {
    return (
      <div className="formDatPhong">
        <Row>
          <Col xs={24} sm={12} md={24} lg={12}>
            <Form.Item
              label="Ng??y nh???n ph??ng"
              name="checkInDate"
              className="checkInItem"
              rules={[
                {
                  required: true,
                  message: "H??y ch???n ng??y nh???n ph??ng",
                },
              ]}
            >
              <DatePicker format="DD-MM-YYYY" disabledDate={disabledDate} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={24} lg={12}>
            <Form.Item
              label="Ng??y tr??? ph??ng"
              name="checkOutDate"
              className="checkOutItem"
              rules={[
                {
                  required: true,
                  message: "H??y ch???n ng??y tr??? ph??ng",
                },
              ]}
            >
              <DatePicker format="DD-MM-YYYY" disabledDate={disabledDate} />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          label="S??? l?????ng kh??ch"
          name="numberCustomer"
          style={{ marginLeft: 10 }}
          rules={[
            {
              required: true,
              message: "H??y nh???p s??? l?????ng kh??ch",
            },
            {
              type: "number",
              max: guests,
              message: `S??? l?????ng kh??ch t??? 1 ?????n ${guests}`,
            },
          ]}
        >
          <InputNumber min={1} max={50} style={{ width: "95%" }} />
        </Form.Item>
      </div>
    );
  };
  const formBoxDatPhong = () => {
    if (prevValues === null) {
      return (
        <Form
          onFinish={onFinishWithoutValue}
          initialValues={{
            ["checkInDate"]: checkInDatePrev,
            ["checkOutDate"]: checkOutDatePrev,
            ["numberCustomer"]: numberCustomerPrev,
          }}
        >
          {formLayout()}
          <div className="footerBox">
            <Button htmlType="submit" className="buttonSubmitPhongO">
              Ki???m tra
            </Button>
          </div>
        </Form>
      );
    }
    if (prevValues !== null) {
      const diferrenceInDay1 = Math.abs(
        (new Date(checkOutDatePrev).getTime() -
          new Date(checkInDatePrev).getTime()) /
          (1000 * 3600 * 24)
      );
      const diferrenceInDay2 = Math.round(diferrenceInDay1);
      const totalPrice = price * diferrenceInDay2;
      return (
        <Form
          onFinish={onFinishWithValue}
          initialValues={{
            ["checkInDate"]: checkInDatePrev,
            ["checkOutDate"]: checkOutDatePrev,
            ["numberCustomer"]: numberCustomerPrev,
          }}
        >
          {formLayout()}
          <div className="footerBox">
            <p>
              {formatter.format(price)} x {diferrenceInDay2} ????m{" "}
              <span className="priceSpan">{formatter.format(totalPrice)}</span>
            </p>
            <Button htmlType="submit" className="buttonSubmitPhongO">
              ?????t ph??ng
            </Button>
          </div>
        </Form>
      );
    }
  };

  return (
    <div className="boxDatPhong">
      <h3 style={{ color: "black" }}>
        {formatter.format(price)}
        <span style={{ fontSize: 18 }}>/????m</span>
      </h3>
      {formBoxDatPhong()}
      <Modal
        visible={isModalVisible}
        footer={null}
        showIcon
        onCancel={handleOk}
      >
        <Alert
          message="????ng nh???p tr?????c khi x??c nh???n"
          type="error"
          showIcon
          style={{ marginTop: 20 }}
        />
      </Modal>
    </div>
  );
}
