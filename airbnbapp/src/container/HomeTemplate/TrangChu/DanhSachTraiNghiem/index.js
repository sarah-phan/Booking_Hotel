import React from 'react'
import { Card, Row, Col } from 'antd';

export default function DanhSachTraiNghiem(props) {
    const { Meta } = Card;
    const { viTri } = props

    const renderCardTraiNghiem = () => {
        return viTri?.map((traiNghiem) => {
            return (
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 290 }}
                            cover={<img alt={traiNghiem.image} src={traiNghiem.image} style={{objectFit:'cover', height: 300}}/>}
                        >
                            <Meta title={traiNghiem.name} description={`${traiNghiem.province}, ${traiNghiem.country}`}/>
                        </Card>
                    </Col>
            )
        })
    }
    return (
        <>
            <h1 className='traiNghiemTitle'>Trải nghiệm</h1>
            <div className='renderCard'>
            <Row>
            {renderCardTraiNghiem()}
            </Row>
            </div>
        </>
    )
}
