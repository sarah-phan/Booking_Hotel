import React from 'react'
import "./style.css"
import { Row, Col } from 'antd'

export default function Navbar() {
  return (
    <div className='navbarHomepage'>
        <Row>
            <Col span={12} className="logoHomepage">
                <h1>Airbnb</h1>
            </Col>
            <Col span={12}>
                <p>jfkds</p>
            </Col>
        </Row>
    </div>
  )
}
