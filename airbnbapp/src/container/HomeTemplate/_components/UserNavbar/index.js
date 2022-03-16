import React, { Fragment } from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {
    Menu,
    Avatar,
    Space,
    Dropdown,
    Image
} from 'antd'
import {
    UserOutlined,
    UserAddOutlined,
    MenuOutlined
} from '@ant-design/icons'
import { actGetChiTiet } from '../../../../reducer/moduleUserDetail/action'
import DangNhap from '../DangNhap'
import "./style.css"

export default function UserNavbar() {
    const dataChiTietUser = useSelector(state => state.getChiTietUserReducer.data)
    const dispatch = useDispatch()
    if (JSON.parse(localStorage.getItem("UserAccount")) !== null) {
        var idUser = JSON.parse(localStorage.getItem("UserAccount")).user._id
    }
    useEffect(() => {
        if (idUser !== undefined) {
            dispatch(actGetChiTiet(idUser))
        }
    }, [])

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
                srcAvatar = <Image src={dataChiTietUser?.avatar} width="100%" height="100%" style={{ objectFit: 'cover' }} />
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
        <Fragment>
            {isLogin()}
        </Fragment>
    )
}






