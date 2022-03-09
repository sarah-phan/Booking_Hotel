import React from 'react'
import { Row, Col } from "antd"
import {
    GlobalOutlined,
    FacebookOutlined,
    TwitterOutlined,
    InstagramOutlined
} from "@ant-design/icons"
import "./style.css"

export default function Footer() {
    return (
        <div className='footerHome'>
            <div className='footerContent'>
                <Row>
                    <Col span={6}>
                        <h3>Hỗ trợ</h3>
                        <ul>
                            <li>
                                <a href='#'>Trung tâm trợ giúp</a>
                            </li>
                            <li>
                                <a href='#'>Thông tin an toàn</a>
                            </li>
                            <li>
                                <a href='#'>Các tùy chọn hủy</a>
                            </li>
                            <li>
                                <a href='#'>Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi</a>
                            </li>
                            <li>
                                <a href='#'>Hỗ trợ người khuyết tật</a>
                            </li>
                            <li>
                                <a href='#'>Báo cáo lo ngại của hàng xóm</a>
                            </li>
                        </ul>
                    </Col>
                    <Col span={6}>
                        <h3>Cộng đồng</h3>
                        <li>
                            <a href='#'>Airbnb.org: nhà ở cứu trợ</a>
                        </li>
                        <li>
                            <a href='#'>Hỗ trợ dân tị nạn Afghanistan</a>
                        </li>
                        <li>
                            <a href='#'>Chống phân biệt đối xử</a>
                        </li>
                    </Col>
                    <Col span={6}>
                        <h3>Đón tiếp khách</h3>
                        <li>
                            <a href='#'>Thử đón tiếp khách</a>
                        </li>
                        <li>
                            <a href='#'>Bảo vệ cho Host</a>
                        </li>
                        <li>
                            <a href='#'>Xem tài nguyên đón tiếp khách</a>
                        </li>
                        <li>
                            <a href='#'>Truy cập diễn đàn cộng đồng</a>
                        </li>
                        <li>
                            <a href='#'>Đón tiếp khách có trách nhiệm</a>
                        </li>
                    </Col>
                    <Col span={6}>
                        <h3>Giới thiệu</h3>
                        <li>
                            <a href='#'>Trang tin tức</a>
                        </li>
                        <li>
                            <a href='#'>Tìm hiểu các tính năng mới</a>
                        </li>
                        <li>
                            <a href='#'>Thư ngỏ từ các nhà sáng lập</a>
                        </li>
                        <li>
                            <a href='#'>Cơ hội nghề nghiệp</a>
                        </li>
                        <li>
                            <a href='#'>Nhà đầu tư</a>
                        </li>
                        <li>
                            <a href='#'>Airbnb Luxe</a>
                        </li>
                    </Col>
                </Row>
            </div>
            <div className='footerBottom'>
                <Row>
                    <Col span={12}>
                        <span>&copy; 2022 Airbnb, Inc</span>
                        <span className='dotted'>&#183;</span>
                        <a href='#'>Quyền riêng tư</a>
                        <span className='dotted'>&#183;</span>
                        <a href='#'>Điều khoản</a>
                        <span className='dotted'>&#183;</span>
                        <a href='#'>Sơ đồ trang web</a>
                    </Col>
                    <Col span={3}>
                        <GlobalOutlined />
                        <span className='decoration'>Tiếng Việt(VN)</span>
                    </Col>
                    <Col span={4}>
                        <span>$</span>
                        <span className='decoration'>USD</span>
                    </Col>
                    <Col span={3}>
                        <ul>
                            <li>
                                <FacebookOutlined />
                            </li>
                            <li>
                                <TwitterOutlined />
                            </li>
                            <li>
                                <InstagramOutlined />
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </div>

    )
}
