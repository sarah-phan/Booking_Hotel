import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  EnvironmentOutlined,
  StarOutlined,
  BankOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";

import { NavLink } from "react-router-dom";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const menus = [
  {
    key: "sub1",
    icon: <UserOutlined />,
    title: "Quản Lý Người Dùng",
    subMenus: [
      {
        key: "1",
        path: "/admin/users",
        title: "Xem Danh Sách Users"
      },
      {
        key: "2",
        path: "/admin/users/new",
        title: "Tạo Quản Trị Viên"
      }
    ]
  },
  {
    key: "sub2",
    icon: <EnvironmentOutlined />,
    title: "Quản Lý địa điểm",
    subMenus: [
      {
        key: "3",
        path: "/admin/locations",
        title: "Xem Danh Sách địa điểm"
      },
      {
        key: "4",
        path: "/admin/location/new",
        title: "Tạo Mới địa điểm"
      }
    ]
  },
  {
    key: "sub3",
    icon: <BankOutlined />,
    title: "Quản Lý Phòng Cho Thuê",
    subMenus: [
      {
        key: "5",
        path: "/admin/rooms",
        title: "Xem Danh Sách Phòng Cho Thuê"
      },
      {
        key: "6",
        path: "/admin/room/new",
        title: "Tạo Mới Phòng Cho Thuê"
      }
    ]
  },
  {
    key: "sub4",
    icon: <StarOutlined />,
    title: "Quản Lý Đánh Giá",
    subMenus: [
      {
        key: "7",
        path: "/admin/valueates",
        title: "Xem Danh Sách Đánh Giá"
      },
      {
        key: "8",
        path: "/admin/valueate/new",
        title: "Tạo Mới Đánh Giá"
      }
    ]
  },
  {
    key: "sub5",
    icon: <ProfileOutlined />,
    title: "Quản Lý Vé",
    subMenus: [
      {
        key: "9",
        path: "/admin/tickets",
        title: "Xem Danh Sách Vé"
      },
      {
        key: "10",
        path: "/admin/ticket/new",
        title: "Tạo Mới Vé"
      }
    ]
  }
]

export default function AdminLayout({
  children,
  defaultSelectedKeys = ['1'],
  defaultOpenKeys = ['sub1'],
}) {
  const dispatch = useDispatch()
  return (
    <div>
      <Layout>
        <Header className="header" style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <div className="left">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key="1">AdminPage</Menu.Item>
            </Menu>
          </div>
          <div className="right">
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item onClick={() => {
                localStorage.removeItem('access_token');
                localStorage.removeItem('user-id');
                window.location.replace('/')
              }} key="logout">Logout</Menu.Item>
            </Menu>
          </div>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Layout
            className="site-layout-background"
            style={{ padding: "24px 0" }}
          >
            <Sider className="site-layout-background" width={350}>
              <Menu
                mode="inline"
                defaultSelectedKeys={defaultSelectedKeys}
                defaultOpenKeys={defaultOpenKeys}
                style={{ height: "100%" }}
              >
                {menus.map(({ subMenus, ...menu }) => (<SubMenu
                  {...menu}
                >
                  {subMenus.map((sMenu) => (
                    <Menu.Item key={sMenu.key} >
                      <NavLink to={sMenu.path}>{sMenu.title}</NavLink>
                    </Menu.Item>
                  ))}
                </SubMenu>))}
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 700 }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
              </Breadcrumb>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: "85vh" }}
              >
                {children}
              </div>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
}
