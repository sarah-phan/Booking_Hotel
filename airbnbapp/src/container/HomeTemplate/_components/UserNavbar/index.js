import React, { Fragment, useMemo } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Menu, Avatar, Space, Dropdown, Image } from "antd";
import { UserOutlined, UserAddOutlined, MenuOutlined } from "@ant-design/icons";
import { actGetChiTiet } from "../../../../reducers/moduleAuth/action";
import DangNhap from "../DangNhap";
import "./style.css";

export default function UserNavbar() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer.data);

  const idUser = useMemo(() => {
    return auth?.user?._id || localStorage.getItem('user-id');
  }, [auth])

  useEffect(() => {
    idUser && idUser != "undefined" && dispatch(actGetChiTiet(idUser));
  }, [idUser]);

  const menu = (
    <Menu>
      <Menu.Item>
        <DangNhap />
      </Menu.Item>
      <Menu.Item>
        <NavLink to={"/dang-ky"}>
          <UserAddOutlined className="iconUser" />
          Đăng ký
        </NavLink>
      </Menu.Item>
    </Menu>
  );

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const menuAlreadyLogin = (
    <Menu>
      <Menu.Item>
        <NavLink
          to={`/tai-khoan/${idUser}/thong-tin-ca-nhan`}
          activeStyle={{ fontWeight: "bold" }}
        >
          Tài khoản cá nhân
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink
          to={`/tai-khoan/${idUser}/upload-avatar`}
          activeStyle={{ fontWeight: "bold" }}
        >
          Cập nhật ảnh đại diện
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink
          to={`/tai-khoan/${idUser}/lich-su`}
          activeStyle={{ fontWeight: "bold" }}
        >
          Lịch sử
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <a onClick={logout}>Đăng xuất</a>
      </Menu.Item>
    </Menu>
  );

  const isLogin = () => {
    let iconUser = null;
    let srcAvatar = null;

    if (!auth) {
      return (
        <Space wrap>
          <Dropdown overlay={menu}>
            <div className="userNav">
              <MenuOutlined className="iconThree" />
              <UserOutlined className="iconPerson" />
            </div>
          </Dropdown>
        </Space>
      );
    } else {
      if (auth?.user?.avatar === undefined) {
        iconUser = <UserOutlined />;
      } else {
        srcAvatar = (
          <Image
            src={auth?.user?.avatar}
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
          />
        );
      }
      return (
        <>
          <Space wrap>
            <Dropdown overlay={menuAlreadyLogin}>
              <div className="userNavAlreadyLogin">
                <h3>{auth?.user?.name}</h3>
              </div>
            </Dropdown>
          </Space>
          <Avatar
            className="userAvatar"
            size={50}
            icon={iconUser}
            src={srcAvatar}
          />
        </>
      );
    }
  };
  return <Fragment>{isLogin()}</Fragment>;
}
