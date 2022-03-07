import React, { useState } from 'react'
import "./style.css"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { actFetchViTri } from './module/action'
import { Row, Col } from "antd"
import { Avatar, Space, Dropdown, Modal, Menu } from 'antd'
import {
  UnorderedListOutlined,
  UserOutlined,
  UserAddOutlined
} from "@ant-design/icons"
import DanhSachTraiNghiem from './DanhSachTraiNghiem'
import FormTimKiem from './FormTimKiem'
import DangNhap from './DangNhap'
import { NavLink } from 'react-router-dom'

export default function TrangChu() {
  const dataViTri = useSelector(state => state.getViTriReducer.data)
  const loading = useSelector(state => state.getViTriReducer.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actFetchViTri())
  }, [])

  // console.log(dataViTri)

  const danhSachTraiNghiem = () => {
    return (
      <DanhSachTraiNghiem viTri={dataViTri} />
    )
  }

  const TimeRelatedForm = () => {
    let arr = dataViTri?.filter((ele, idx) => idx === dataViTri?.findIndex(elem => elem.province === ele.province))
    return (
      <FormTimKiem
        arr={arr}
      />
    )
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <DangNhap/>
      </Menu.Item>
      <Menu.Item>
        <NavLink to={"/dang-ky"}>
        <UserAddOutlined className='iconUser' />
        Đăng ký
        </NavLink>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <div className='trangChuCarousel'>
        <div className='header'>
          <Space wrap>
            <Dropdown overlay={menu}>
              <div className='userNav'>
                <UnorderedListOutlined style={{ fontSize: 25, paddingRight: 6 }} />
                <Avatar size="large" icon={<UserOutlined style={{ fontSize: 28 }} />} />
              </div>
            </Dropdown>
          </Space>
        </div>
        <div className='carouselContent'>
          <Row>
            <Col span={12}>
              <h1>Airbnb</h1>
            </Col>
            <Col span={12}>
              <div className='formTimKiem'>
                {TimeRelatedForm()}
              </div>
            </Col>
          </Row>
        </div>
      </div>
      {danhSachTraiNghiem()}
    </>
  )
}
