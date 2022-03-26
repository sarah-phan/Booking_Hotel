import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetDetailRoom } from "../ChiTietPhongO/module/action";
import { useHistory } from "react-router-dom";
import { Alert, Button } from "antd";
import Loading from "../../../components/loading";
import "./style.css";
import emailjs from "@emailjs/browser";
import { actCreateBooking } from "./module/action";

export default function XacNhan(props) {
  const { id } = props.match.params;
  const dataDetailRoom = useSelector(
    (state) => state.getDetailRoomReducer.data
  );
  const loadingDetailRoom = useSelector(
    (state) => state.getDetailRoomReducer.loading
  );
  const prevValues = useSelector((state) => state.getValueSearchReducer.value);
  const dataCreateBooking = useSelector(
    (state) => state.createBookingReducer.data
  );
  const errorCreateBooking = useSelector(
    (state) => state.createBookingReducer.error
  );
  const dispatch = useDispatch();
  const history = useHistory();

  var formatter = new Intl.NumberFormat("VND", {
    style: "currency",
    currency: "VND",
  });

  useEffect(() => {
    dispatch(actGetDetailRoom(id));
  }, [id]);

  if (prevValues === null) {
    history.goBack(`/chi-tiet-phong-o/${id}`);
  }

  if (loadingDetailRoom) {
    return <Loading />;
  }

  const numberCustomerPrev = prevValues?.numberCustomer;
  const checkInDatePrev = new Date(
    prevValues?.checkInDate._d
  ).toLocaleDateString();
  const checkInDatePrevFormat = new Date(
    prevValues?.checkInDate._d
  ).toLocaleDateString("en-GB");
  const checkOutDatePrev = new Date(
    prevValues?.checkOutDate._d
  ).toLocaleDateString();
  const checkOutDatePrevFormat = new Date(
    prevValues?.checkOutDate._d
  ).toLocaleDateString("en-GB");
  const price = dataDetailRoom?.price;
  const differenceInDay1 = Math.abs(
    (new Date(checkOutDatePrev).getTime() -
      new Date(checkInDatePrev).getTime()) /
      (1000 * 3600 * 24)
  );
  const differenceInDay2 = Math.round(differenceInDay1);
  const totalPrice = price * differenceInDay2;
  let arr = {
    name: JSON.parse(localStorage.getItem("UserAccount")).user.name,
    message1: `Khách sạn: ${dataDetailRoom?.name}`,
    message2: `Ngày đặt phòng: ${checkInDatePrevFormat}`,
    message3: `Ngày trả phòng: ${checkOutDatePrevFormat}`,
    message4: `Giá 1 đêm: ${dataDetailRoom?.price}`,
    message5: `Số ngày: ${differenceInDay2}`,
    message6: `Tổng tiền: ${totalPrice}`,
    email: JSON.parse(localStorage.getItem("UserAccount")).user.email,
  };
  let apiArr = {
    checkIn: checkInDatePrev,
    checkOut: checkOutDatePrev,
    userId: JSON.parse(localStorage.getItem("UserAccount")).user._id,
    roomId: id,
  };
  const bookingValues = (arr, apiArr) => {
    emailjs
      .send("service_7am7aw8", "template_foo9xe6", arr, "RCegoAy_Vx7KbwWzY")
      .then(
        (result) => {},
        (error) => {}
      );
    dispatch(actCreateBooking(apiArr));
  };

  if (dataCreateBooking !== null) {
    return (
      <Alert
        message="Xác nhận thành công. Thông tin đã được gửi qua email của bạn!"
        type="success"
        showIcon
        style={{ marginTop: 20 }}
        closable
        afterClose={() => (window.location.href = "/")}
      />
    );
  }
  if (errorCreateBooking !== null) {
    return (
      <Alert
        message={errorCreateBooking}
        type="error"
        showIcon
        style={{ marginTop: 20 }}
        closable
        afterClose={() => history.goBack(`/chi-tiet-phong-o/${id}`)}
      />
    );
  }

  return (
    <div className="claimPage">
      <h2>Xác nhận và đặt chỗ</h2>
      <h3>1. Chuyến đi của bạn</h3>
      <div className="bookingInformation">
        <div className="bookingContent">
          <span className="bookingTitle">Khách sạn</span>
          <span>{dataDetailRoom?.name}</span>
        </div>
        <div className="bookingContent">
          <span className="bookingTitle">Ngày nhận phòng</span>
          <span>{checkInDatePrevFormat}</span>
        </div>
        <div className="bookingContent">
          <span className="bookingTitle">Ngày trả phòng phòng</span>
          <span>{checkOutDatePrevFormat}</span>
        </div>
        <div className="bookingContent">
          <span className="bookingTitle">Số lượng khách</span>
          <span>{numberCustomerPrev}</span>
        </div>
      </div>
      <h3>2. Chi tiết giá tiền</h3>
      <div className="detailPrice">
        <div className="bookingContent">
          <span className="bookingTitle">Giá tiền 1 đêm</span>
          <span>{formatter.format(dataDetailRoom?.price)}</span>
        </div>
        <div className="bookingContent">
          <span className="bookingTitle">Tổng số đêm</span>
          <span>{differenceInDay2}</span>
        </div>
        <div className="bookingContent">
          <span className="bookingTitle">Thành tiền</span>
          <span>{formatter.format(totalPrice)}</span>
        </div>
      </div>
      <div className="buttonXacNhan">
        <Button
          onClick={() => (window.location.href = `/chi-tiet-phong-o/${id}`)}
          className="buttonChinhSua"
        >
          Chỉnh sửa
        </Button>
        <Button
          onClick={() => {
            bookingValues(arr, apiArr);
          }}
          className="buttonModal"
        >
          Xác nhận và đặt chỗ
        </Button>
      </div>
    </div>
  );
}
