import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import { Button, Col, Modal, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../components/loading'
import BinhLuanPhongO from './BinhLuanPhongO'
import BoxDatPhong from './BoxDatPhong'
import { actGetDetailRoom } from './module/action'
import "./style.css"

export default function ChiTietPhongO(props) {
  const dataDetailRoom = useSelector(state => state.getDetailRoomReducer.data)
  const loadingDetailPage = useSelector(state => state.getDetailRoomReducer.loading)
  const dispatch = useDispatch()
  const { id } = props.match.params

  useEffect(() => {
    dispatch(actGetDetailRoom(id))
  }, [id])

  const [isModalVisible, setIsModalVisible] = useState(false);

  if (loadingDetailPage) {
    return (
      <Loading />
    )
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const translateName = (arr) => {
    const arrTranslateName = []
    for (var x of arr) {
      switch (x) {
        case ("wifi"): {
          arrTranslateName.push("Wifi")
          break
        }
        case ("elevator"): {
          arrTranslateName.push("Thang máy")
          break
        }
        case ("hotTub"): {
          arrTranslateName.push("Bồn tắm nước nóng")
          break
        }
        case ("pool"): {
          arrTranslateName.push("Hồ bơi")
          break
        }
        case ("indoorFireplace"): {
          arrTranslateName.push("Lò sưởi trong nhà")
          break
        }
        case ("dryer"): {
          arrTranslateName.push("Máy sấy tóc")
          break
        }
        case ("gym"): {
          arrTranslateName.push("Phòng tập gym")
          break
        }
        case ("kitchen"): {
          arrTranslateName.push("Nhà bếp")
          break
        }
        case ("heating"): {
          arrTranslateName.push("Hệ thống sưởi")
          break
        }
        case ("cableTV"): {
          arrTranslateName.push("Truyền hình cáp")
          break
        }
      }
    }
    return arrTranslateName
  }

  const renderUtilities = () => {
    let arrUtilitiesAvailable = []
    for (var x in dataDetailRoom) {
      if (dataDetailRoom[x] === true) {
        arrUtilitiesAvailable.push(x)
      }
    }
    arrUtilitiesAvailable = translateName(arrUtilitiesAvailable)
    return (
      <>
        <Row>
          <Col span={6}>
            <p style={{marginTop: 15}}>
              <CheckOutlined />
              <span className='utilitiesName'>
                {arrUtilitiesAvailable[0]}
              </span>
            </p>
            <p style={{marginTop: 35}}>
              <CheckOutlined />
              <span className='utilitiesName'>
                {arrUtilitiesAvailable[1]}
              </span>
            </p>
          </Col>
          <Col span={12}>
            <p style={{marginTop: 15}}>
              <CheckOutlined />
              <span className='utilitiesName'>
                {arrUtilitiesAvailable[2]}
              </span>
            </p>
            <p  style={{marginTop: 35}}>
              <CheckOutlined />
              <span className='utilitiesName'>
                {arrUtilitiesAvailable[3]}
              </span>
            </p>
          </Col>
        </Row>
      </>
    )
  }

  const availableUtilitiesModal = () => {
    let arrUtilitiesAvailable = []
    for (var x in dataDetailRoom) {
      if (dataDetailRoom[x] === true) {
        arrUtilitiesAvailable.push(x)
      }
    }
    arrUtilitiesAvailable = translateName(arrUtilitiesAvailable)
    return arrUtilitiesAvailable.map((a) => {
      return (
        <Col span={12}>
          <p>
            <CheckOutlined />
            <span className='utilitiesName'>
              {a}
            </span>
          </p>
        </Col>
      )
    })
  }

  const unavailableUtilitiesModal = () => {
    let arrUtilitiesUnavailable = []
    for (var x in dataDetailRoom) {
      if (dataDetailRoom[x] === false) {
        arrUtilitiesUnavailable.push(x)
      }
    }
    arrUtilitiesUnavailable = translateName(arrUtilitiesUnavailable)
    return arrUtilitiesUnavailable.map((a) => {
      return (
        <Col span={12}>
          <p>
            <CloseOutlined />
            <span className='utilitiesName'>
              {a}
            </span>
          </p>
        </Col>
      )
    })
  }

  const renderRoomComment = () => {
    return(
      <BinhLuanPhongO id = {id}/>
    )
  }
  
  const renderFormDatPhong = () => {
    return(
      <BoxDatPhong 
      price = {dataDetailRoom?.price}
      location = {`${dataDetailRoom?.locationId.province}, ${dataDetailRoom?.locationId.country}`}
      id = {id}
      />
    )
  }
  return (
    <div className='detailRoom'>
      <div className='roomName'>
        <h2>{dataDetailRoom?.name}</h2>
      </div>
      <div className='roomQuantity'>
            <span>{dataDetailRoom?.guests} khách</span>
            <span className='dotted'>&#183;</span>
            <span>{dataDetailRoom?.bedRoom} phòng ngủ</span>
            <span className='dotted'>&#183;</span>
            <span>{dataDetailRoom?.bath} phòng tắm</span>
          </div>
      <div className='roomImage'>
        <img src={dataDetailRoom?.image} alt={dataDetailRoom?.image} style={{ width: "100%", height: "400px", objectFit: 'contain' }} />
      </div>
      <div className='wrapper'>
      <Row>
        <Col span={14}>  
          <div className='roomDescription'>
            <h3>Mô tả</h3>
            <p>{dataDetailRoom?.description}</p>
          </div>
          <div className='roomUtitlities'>
            <h3>Nơi này có gì cho bạn</h3>
            {renderUtilities()}
            <Button type="primary" onClick={showModal}>
              Hiển thị tất cả
            </Button>
            <Modal
              title="Nơi này có gì cho bạn"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              className="utilitiesModal"
              bodyStyle={{ overflowY: 'scroll' }}
              style={{ height: 'calc(130vh - 206px)' }}
            >
              <div className='availableUtilities'>
                <h3>Bao gồm</h3>
                <Row>
                  {availableUtilitiesModal()}
                </Row>
              </div>
              <div className='unavailableUtilities'>
                <h3>Không bao gồm</h3>
                <Row>
                  {unavailableUtilitiesModal()}
                </Row>
              </div>
            </Modal>
          </div>
          <div className='roomComment'>
            <h3>Những người khác nghĩ gì?</h3>
            {renderRoomComment()}
          </div>
        </Col>
        <Col span={10}>
          {renderFormDatPhong()}
        </Col>
      </Row>
      </div>
      
    </div>
  )
}
