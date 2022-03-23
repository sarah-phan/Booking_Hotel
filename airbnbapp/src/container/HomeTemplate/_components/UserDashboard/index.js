import { CloudUploadOutlined, HistoryOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Row, Col, Layout, Menu } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { actGetChiTiet } from '../../../../reducer/moduleUserDetail/action'
import LichSu from '../../LichSu'
import ThongTinChiTiet from '../../ThongTinChiTiet'
import UploadAvatar from '../../UploadAvatar'
import "./style.css"

export default function UserDashboard(props) {
  if (JSON.parse(localStorage.getItem("UserAccount")) === null) {
    history.push("/")
  }
  const history = useHistory()
  const dispatch = useDispatch()
  const { id } = props.match.params
  const dataUserDetail = useSelector(state => state.getChiTietUserReducer.data)
  useEffect(() => {
    dispatch(actGetChiTiet(id))
  }, [id])

  return (
    <>
      <Layout>
        <Layout.Header style={{ backgroundColor: 'white' }}>
          <div className='accountHeader'>
            <div>
              <Avatar src={dataUserDetail?.avatar} size={70} shape='square' />
            </div>
            <div>
              <p style={{ height: 10 }}>Tài khoản của</p>
              <h2>{dataUserDetail?.name}</h2>
            </div>
          </div>
        </Layout.Header>
        <Layout.Content className=''>
          <Layout>
            <Layout.Sider>
              <Menu>
                <Menu.Item key="thongTinTaiKhoan" icon={<UserOutlined />} mode="inline">
                  <NavLink
                    activeStyle={{fontWeight: 'bold'}} 
                    to={`/tai-khoan/${id}/thong-tin-ca-nhan`}
                    >
                      Thông tin cá nhân
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="thongTinTaiKhoan" icon={<CloudUploadOutlined />} mode="inline">
                  <NavLink 
                  to={`/tai-khoan/${id}/upload-avatar`}
                  activeStyle={{fontWeight: 'bold'}} 
                  >
                    Cập nhật ảnh đại diện
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="thongTinTaiKhoan" icon={<HistoryOutlined />} mode="inline">
                  <NavLink 
                  to={`/tai-khoan/${id}/lich-su`}
                  activeStyle={{fontWeight: 'bold'}} 
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
                  path={`/tai-khoan/${id}/thong-tin-ca-nhan`}
                  component={ThongTinChiTiet}
                />
                <Route
                  exact={false}
                  path={`/tai-khoan/${id}/upload-avatar`}
                  component={UploadAvatar}
                />
                <Route
                  exact={false}
                  activeStyle={{ color: 'red' }}
                  path={`/tai-khoan/${id}/lich-su`}
                  component={LichSu}
                />
              </div>
            </Layout.Content>
          </Layout>
        </Layout.Content>
      </Layout>

    </>
  )
}
