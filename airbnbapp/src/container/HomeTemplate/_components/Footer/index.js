import React from 'react'
import {Row, Col} from "antd"
import { NavLink } from 'react-router-dom'

export default function index() {
  return (
    <div>
        <Row>
            <Col span={8}>
                <h3>Hỗ trợ</h3>
                <ul>
                    <li>
                        <NavLink>Trung tâm trợ giúp</NavLink>
                    </li>
                    <li>
                        <NavLink>Thông tin an toàn</NavLink>
                    </li>
                </ul>
            </Col>
        </Row>
    </div>
  )
}
