import React, { useEffect } from 'react'
import FormDanhSachPhongO from './FormDanhSachPhongO'
import { useSelector, useDispatch } from 'react-redux'
import { actFetchViTri } from '../TrangChu/module/action'
import "./style.css"
import AdvancedSearch from './AdvancedSearch'
import { Row, Col } from 'antd'
import ListRoom from './ListRoom'

export default function DanhSachPhongO(props) {
  const dataViTri = useSelector(state => state.getViTriReducer.data)
  const dispatch = useDispatch()
  const idViTri = props.match.params.id

  useEffect(() => {
    dispatch(actFetchViTri());
  }, [])

  const renderFormDanhSachPhongO = () => {
    return (
      <FormDanhSachPhongO
        arr={dataViTri}
      />
    )
  }

  const advancedSearch = () => {
    return (
      <AdvancedSearch />
    )
  }

  const renderListRoom = () => {
    return(
      <ListRoom
      idViTri={idViTri}
      />
    )
  }
  return (
    <div>
      <div className='formDanhSachPhongO'>
        {renderFormDanhSachPhongO()}
      </div>
      <div className='content'>
        <Row>
          <Col span={7} className="advancedSearch">
            {advancedSearch()}
          </Col>
          <Col span={15} className="listRoom">
            {renderListRoom()}
          </Col>
        </Row>
      </div>

    </div>
  )
}
