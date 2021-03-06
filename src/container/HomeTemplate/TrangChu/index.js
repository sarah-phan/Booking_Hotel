import React from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { actFetchViTri } from "./module/action";
import { Row, Col } from "antd";
import DanhSachTraiNghiem from "./DanhSachTraiNghiem";
import FormTimKiem from "./FormTimKiem";
import Footer from "../_components/Footer";
import UserNavbar from "../_components/UserNavbar";

export default function TrangChu() {
  const dataViTri = useSelector((state) => state.getViTriReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchViTri());
  }, []);

  const danhSachTraiNghiem = () => {
    return <DanhSachTraiNghiem viTri={dataViTri} />;
  };

  const TimeRelatedForm = () => {
    return <FormTimKiem arr={dataViTri} />;
  };

  return (
    <>
      <div className="trangChuCarousel">
        <div className="header">
          <UserNavbar />
        </div>
        <div className="carouselContent">
          <Row>
            <Col xs={24} sm={24} md={7} lg={12}>
              <h1>Airbnb</h1>
            </Col>
            <Col xs={24} sm={24} md={15} lg={12}>
              <div className="formTimKiem">{TimeRelatedForm()}</div>
            </Col>
          </Row>
        </div>
      </div>
      {danhSachTraiNghiem()}
      <Footer />
    </>
  );
}
