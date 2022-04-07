import React, { useState } from 'react'
import { Slider, InputNumber, Checkbox } from 'antd'
import { actGetAdvancedSearchValue } from './module/action'
import { useDispatch } from 'react-redux'

export default function AdvancedSearch() {
    const dispatch = useDispatch()
    const [priceMin, setPriceMin] = useState(100000)
    const [priceMax, setpriceMax] = useState(1000000)
    const onChange = (value) => {
        if (value[0] < value[1]) {
            setPriceMin(value[0])
            setpriceMax(value[1])
        }
    }
    const onChangeMin = (value) => {
        if (priceMax > value) {
            setPriceMin(value)
        }
    }
    const onChangeMax = (value) => {
        if (priceMin < value) {
            setpriceMax(value)
        }
    }

    const options = [
        {label: "Wifi", value: "wifi"}, 
        {label: "Thang máy", value: "elevator"}, 
        {label: "Bồn tắm nước nóng", value: "hotTub"},
        {label: "Hồ bơi", value: "pool"}, 
        {label: "Lò sưởi trong nhà", value: "indoorFireplace"},
        {label: "Máy sấy tóc", value: "dryer"},
        {label: "Phòng tập gym", value: "gym"}, 
        {label: "Nhà bếp", value: "kitchen"}, 
        {label: "Hệ thống sưởi", value: "heating"}, 
        {label: "Truyền hình cáp", value: "cableTV"}, 
    ]

    const [checkedList, setCheckedList] = useState("")
    const onChangeCheckedList = (values) => {
        setCheckedList(values)
    }
    const transferCheckList = () => {
        let advancedSearchValue = {checkedList, priceMin, priceMax}
        dispatch(actGetAdvancedSearchValue(advancedSearchValue))
    }
    return (
        <>
            <div className='priceRange'>
                <h3>Lọc kết quả</h3>
                <div className='khoangGia'>
                    <h4>Khoảng giá/đêm</h4>
                    <InputNumber
                        min={100000}
                        max={1000000}
                        value={priceMin}
                        onChange={onChangeMin}
                    />
                    <span className='khoangGia_to'>to</span>
                    <InputNumber
                        min={100000}
                        max={1000000}
                        value={priceMax}
                        onChange={onChangeMax}
                    />
                    <Slider
                        min={100000}
                        max={1000000}
                        range
                        onChange={onChange}
                        defaultValue={[priceMin, priceMax]}
                        value={[priceMin, priceMax]}
                    />
                </div>
            </div>
            <div className='utilities'>
                <h4>Tiện ích</h4>
                <Checkbox.Group
                    options={options}
                    value={checkedList}
                    onChange={onChangeCheckedList}
                />
                <button onClick={transferCheckList}>Tìm kiếm</button>
            </div>
        </>
    )
}
