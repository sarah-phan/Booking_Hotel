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

  const auth = useSelector((state) => state.authReducer.data);

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
    name: auth?.user?.name,
    message1: `Kh??ch s???n: ${dataDetailRoom?.name}`,
    message2: `Ng??y ?????t ph??ng: ${checkInDatePrevFormat}`,
    message3: `Ng??y tr??? ph??ng: ${checkOutDatePrevFormat}`,
    message4: `Gi?? 1 ????m: ${dataDetailRoom?.price}`,
    message5: `S??? ng??y: ${differenceInDay2}`,
    message6: `T???ng ti???n: ${totalPrice}`,
    email: auth?.user?.email,
  };
  let apiArr = {
    checkIn: checkInDatePrev,
    checkOut: checkOutDatePrev,
    userId: auth?.user._id,
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
        message="X??c nh???n th??nh c??ng. Th??ng tin ???? ???????c g???i qua email c???a b???n!"
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
      <h2>X??c nh???n v?? ?????t ch???</h2>
      <h3>1. Chuy???n ??i c???a b???n</h3>
      <div className="bookingInformation">
        <div className="bookingContent">
          <span className="bookingTitle">Kh??ch s???n</span>
          <span>{dataDetailRoom?.name}</span>
        </div>
        <div className="bookingContent">
          <span className="bookingTitle">Ng??y nh???n ph??ng</span>
          <span>{checkInDatePrevFormat}</span>
        </div>
        <div className="bookingContent">
          <span className="bookingTitle">Ng??y tr??? ph??ng ph??ng</span>
          <span>{checkOutDatePrevFormat}</span>
        </div>
        <div className="bookingContent">
          <span className="bookingTitle">S??? l?????ng kh??ch</span>
          <span>{numberCustomerPrev}</span>
        </div>
      </div>
      <h3>2. Chi ti???t gi?? ti???n</h3>
      <div className="detailPrice">
        <div className="bookingContent">
          <span className="bookingTitle">Gi?? ti???n 1 ????m</span>
          <span>{formatter.format(dataDetailRoom?.price)}</span>
        </div>
        <div className="bookingContent">
          <span className="bookingTitle">T???ng s??? ????m</span>
          <span>{differenceInDay2}</span>
        </div>
        <div className="bookingContent">
          <span className="bookingTitle">Th??nh ti???n</span>
          <span>{formatter.format(totalPrice)}</span>
        </div>
      </div>
      <div className="buttonXacNhan">
        <Button
          onClick={() => (window.location.href = `/chi-tiet-phong-o/${id}`)}
          className="buttonChinhSua"
        >
          Ch???nh s???a
        </Button>
        <Button
          onClick={() => {
            bookingValues(arr, apiArr);
          }}
          className="buttonModal"
        >
          X??c nh???n v?? ?????t ch???
        </Button>
      </div>
    </div>
  );
}
