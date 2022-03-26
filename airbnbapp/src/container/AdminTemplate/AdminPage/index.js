import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  EnvironmentOutlined,
  StarOutlined,
  BankOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

import { NavLink, Route } from "react-router-dom";
import UserAdmin from "../UserAdmin";
import DangKyAdmin from "../DangKyAdmin";

import AdminLocation from "../Location";
import AdminDetailLocation from "../Location/Detail";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default function AdminPage() {
  return (
    <div>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">AdminPage</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Layout
            className="site-layout-background"
            style={{ padding: "24px 0" }}
          >
            <Sider className="site-layout-background" width={250}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
              >
                <SubMenu
                  key="sub1"
                  icon={<UserOutlined />}
                  title="Quản Lý Người Dùng"
                >
                  <Menu.Item key="1">
                    <NavLink to="/admin/users">Xem Danh Sách Users</NavLink>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <NavLink to="/admin/dang-ky-admin">
                      Tạo Quản Trị Viên{" "}
                    </NavLink>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  icon={<EnvironmentOutlined />}
                  title="Quản Lý Vị Trí"
                >
                  <Menu.Item key="5">
                    <NavLink to="/admin/location">Xem Danh Sách Vị Trí</NavLink>
                  </Menu.Item>
                  <Menu.Item key="6">
                    <NavLink to="/admin">
                      Xem Danh Sách Vị Trí Theo Đánh Giá
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="7">
                    <NavLink to="/admin">Tạo Vị Trí</NavLink>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  icon={<BankOutlined />}
                  title="Quản Lý Phòng Cho Thuê"
                >
                  <Menu.Item key="9">
                    <NavLink to="/admin">Xem Danh Sách Phòng Cho Thuê</NavLink>
                  </Menu.Item>
                  <Menu.Item key="10">
                    <NavLink to="/admin">Tạo Phòng Cho Thuê</NavLink>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub4"
                  icon={<StarOutlined />}
                  title="Quản Lý Đánh Giá"
                >
                  <Menu.Item key="13">
                    <NavLink to="/admin">Quản Lý Đánh Giá</NavLink>
                  </Menu.Item>
                  <Menu.Item key="14">
                    <NavLink to="/admin">Tạo Đánh Giá</NavLink>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub5"
                  icon={<ProfileOutlined />}
                  title="Quản Lý Vé"
                >
                  <Menu.Item key="17">
                    <NavLink to="/admin">Xem Danh Sách Vé</NavLink>
                  </Menu.Item>
                  <Menu.Item key="18">
                    <NavLink to="/admin">Xem Danh Sách Theo Phòng</NavLink>
                  </Menu.Item>
                  <Menu.Item key="19">
                    <NavLink to="/admin">Xem Danh Sách Theo Người Dùng</NavLink>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 700 }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
              </Breadcrumb>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: "85vh" }}
              >
                <Route
                  exact={true}
                  path="/admin/users"
                  // render={() => <div>Mlem admin users</div>}
                  // component={AdminUserComponent}
                  component={UserAdmin}
                />
                <Route
                  exact={true}
                  path="/admin/dang-ky-admin"
                  // render={() => <div>Mlem admin users</div>}
                  // component={AdminUserComponent}
                  component={DangKyAdmin}
                />
                <Route
                  exact={true}
                  path="/admin/location"
                  // render={() => <div>Mlem admin users</div>}
                  // component={AdminUserComponent}
                  component={AdminLocation}
                />
                <Route
                  exact={true}
                  path="/admin/location/:id"
                  // render={() => <div>Mlem admin users</div>}
                  // component={AdminUserComponent}
                  component={AdminDetailLocation}
                />
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
