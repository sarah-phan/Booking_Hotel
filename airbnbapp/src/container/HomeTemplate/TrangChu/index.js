import React from 'react'
import "./style.css"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { actFetchViTri } from './module/action'
import { Row, Col, Alert } from "antd"
import { Avatar, Space, Dropdown, Menu, Image } from 'antd'
import {
  MenuOutlined,
  UserOutlined,
  UserAddOutlined
} from "@ant-design/icons"
import DanhSachTraiNghiem from './DanhSachTraiNghiem'
import FormTimKiem from './FormTimKiem'
import DangNhap from './DangNhap'
import { NavLink } from 'react-router-dom'
import { actGetChiTiet } from '../../../reducer/moduleUserDetail/action'

export default function TrangChu() {
  const dataViTri = useSelector(state => state.getViTriReducer.data)
  const dataChiTietUser = useSelector(state => state.getChiTietUserReducer.data)
  if(JSON.parse(localStorage.getItem("UserAccount")) !== null){
    var idUser = JSON.parse(localStorage.getItem("UserAccount")).user._id
  }
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actFetchViTri());
    if (idUser !== undefined){
      dispatch(actGetChiTiet(idUser))
    }
  }, [])

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
        <DangNhap />
      </Menu.Item>
      <Menu.Item>
        <NavLink to={"/dang-ky"}>
          <UserAddOutlined className='iconUser' />
          Đăng ký
        </NavLink>
      </Menu.Item>
    </Menu>
  );
  
  const logout = () => {
    localStorage.clear()
    window.location.href = "/"
  }

  const menuAlreadyLogin = (
    <Menu>
      <Menu.Item>
        <a href='#'>Tài khoản cá nhân</a>
      </Menu.Item>
      <Menu.Item>
        <a href='#'>Thay đổi ảnh đại diện</a>
      </Menu.Item>
      <Menu.Item>
        <a href='#'>Lịch sử đặt vé</a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={logout}>Đăng xuất</a>
      </Menu.Item>
    </Menu>
  )

  const isLogin = () => {
    let iconUser = null;
    let srcAvatar = null;

    if (JSON.parse(localStorage.getItem("UserAccount")) === null) {
      return (
        <Space wrap>
          <Dropdown overlay={menu}>
            <div className='userNav'>
              <MenuOutlined className='iconThree' />
              <UserOutlined className='iconPerson' />
            </div>
          </Dropdown>
        </Space>
      )
    }
    else {
      if (dataChiTietUser?.avatar === undefined) {
        iconUser = <UserOutlined />
      }
      else {
        srcAvatar = <Image src={dataChiTietUser?.avatar} width="100%" height="100%" style={{objectFit:'cover'}}/>
      }
      return (
        <>
        <Space wrap>
          <Dropdown overlay={menuAlreadyLogin}>
            <div className='userNavAlreadyLogin'>
              <h3>{dataChiTietUser?.name}</h3>
            </div>
          </Dropdown>
        </Space>
        <Avatar className='userAvatar' size={50} icon={iconUser} src={srcAvatar} />
        </>

      )
    }
  }

  return (
    <>
      <div className='trangChuCarousel'>
        <div className='header'>
          {isLogin()}
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
