import React, {useEffect} from 'react'
import FormDanhSachPhongO from './FormDanhSachPhongO'
import { useSelector, useDispatch } from 'react-redux'
import { actFetchViTri } from '../TrangChu/module/action'
import { Row, Col, Slider } from 'antd'
import "./style.css"

export default function DanhSachPhongO() {
  const dataViTri = useSelector(state => state.getViTriReducer.data)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actFetchViTri());
  }, [])

  const renderFormDanhSachPhongO = () => {
    let arr = dataViTri?.filter((ele, idx) => idx === dataViTri?.findIndex(elem => elem.province === ele.province))
    return (
      <FormDanhSachPhongO
        arr={arr}
      />
    )
  }

  return (
    <div>
      <div className='formDanhSachPhongO'>
        {renderFormDanhSachPhongO()}
      </div>
      <div className='advancedSearch'>
        <Row>
          <Col span={12}>
            <h3>Lọc kết quả</h3>
            <div className='khoangGia'>
              <h4>Khoảng giá/đêm</h4>
              <Slider range min={10} max={24000000} marks></Slider>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
