import React from 'react'
import "./style.css"
import { Row, Col } from 'antd'
import UserNavbar from '../UserNavbar'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbarHomepage'>
        <Row>
            <Col span={12} className="logoHomepage">
               <NavLink to="/">
                <h1>Airbnb</h1>
                </NavLink> 
            </Col>
            <Col span={12}>
                <UserNavbar/>
            </Col>
        </Row>
    </div>
  )
}
