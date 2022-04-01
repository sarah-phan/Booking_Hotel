import {
  CloudUploadOutlined,
  HistoryOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Layout, Menu } from "antd";
import React, { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { actGetChiTiet } from "../../../../reducers/moduleUserDetail/action";
import ChiTietLichSu from "../../ChiTietLichSu";
import LichSu from "../../LichSu";
import ThongTinChiTiet from "../../ThongTinChiTiet";
import UploadAvatar from "../../UploadAvatar";
import "./style.css";

export default function UserDashboard(props) {
  const history = useHistory();
  const dataUserDetail = useSelector((state) => state.authReducer.data);
  const dispatch = useDispatch();
  const { id } = props.match.params;
  const auth = useSelector((state) => state.authReducer.data);

  useLayoutEffect(() => {
    if (!auth.token) {
      history.push("/");
    } else if (auth.user?.type == "ADMIN") {
      history.push("/admin");
    }
  }, []);

  useEffect(() => {
    dispatch(actGetChiTiet(id));
  }, [id]);

  return (
    <>
      <Layout style={{ background: "white" }}>
        <Layout.Header style={{ backgroundColor: "white" }}>
          <div className="accountHeader">
            <div className="accountAvatar">
              <Avatar src={dataUserDetail?.avatar} size={70} shape="square" />
            </div>
            <div className="accountName">
              <p>Tài khoản của</p>
              <h2>{dataUserDetail?.name}</h2>
            </div>
          </div>
        </Layout.Header>
        <Layout.Content className="accountContent">
          <Layout>
            <Layout.Sider width={350}>
              <Menu>
                <Menu.Item icon={<UserOutlined />} mode="inline">
                  <NavLink
                    activeStyle={{ fontWeight: "bold" }}
                    to={`/tai-khoan/${id}/thong-tin-ca-nhan`}
                  >
                    Thông tin cá nhân
                  </NavLink>
                </Menu.Item>
                <Menu.Item icon={<CloudUploadOutlined />} mode="inline">
                  <NavLink
                    to={`/tai-khoan/${id}/upload-avatar`}
                    activeStyle={{ fontWeight: "bold" }}
                  >
                    Cập nhật ảnh đại diện
                  </NavLink>
                </Menu.Item>
                <Menu.Item icon={<HistoryOutlined />} mode="inline">
                  <NavLink
                    to={`/tai-khoan/${id}/lich-su`}
                    activeStyle={{ fontWeight: "bold" }}
                  >
                    Lịch sử
                  </NavLink>
                </Menu.Item>
              </Menu>
            </Layout.Sider>
            <Layout.Content>
              <div>
                <Route
                  exact={false}
                  path="/tai-khoan/:id/thong-tin-ca-nhan"
                  component={ThongTinChiTiet}
                />
                <Route
                  exact={false}
                  path="/tai-khoan/:id/upload-avatar"
                  component={UploadAvatar}
                />
                <Route
                  exact={true}
                  path="/tai-khoan/:id/lich-su"
                  component={LichSu}
                />
                <Route
                  exact={false}
                  path="/tai-khoan/:id/lich-su/chi-tiet-lich-su/:idList"
                  component={ChiTietLichSu}
                />
              </div>
            </Layout.Content>
          </Layout>
        </Layout.Content>
      </Layout>
    </>
  );
}
