import React, { useMemo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";
import { actFetchListLocation } from "./module/action";

export default function AdminLocation(props) {
  const { history } = props;
  const dataSource = useSelector((state) => state.getListLocationReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchListLocation());
  }, []);
  const columns = useMemo(() => {
    return [
      {
        title: "Name",
        dataIndex: "name",
        width: "200px",
      },
      {
        title: "Province",
        dataIndex: "province",
        width: "100px",
      },
      {
        title: "Valueate",
        dataIndex: "valueate",
        width: "50px",
        filters: [
          {
            text: "1",
            value: 1,
          },
          {
            text: "2",
            value: 2,
          },
          {
            text: "3",
            value: 3,
          },
          {
            text: "4",
            value: 4,
          },
          {
            text: "5",
            value: 5,
          },
          {
            text: "6",
            value: 6,
          },
          {
            text: "7",
            value: 7,
          },
          {
            text: "8",
            value: 8,
          },
          {
            text: "9",
            value: 9,
          },
          {
            text: "10",
            value: 10,
          },
        ],
        onFilter: (value, record) => record.valueate == value,
        filterSearch: true,
      },
      {
        title: "Country",
        dataIndex: "country",
        width: "50px",
      },
      {
        title: "Image",
        dataIndex: "image",
        width: "70px",
        render: (text, record, index) => {
          return <img src={text} alt={text} style={{ width: "50px" }} />;
        },
      },
    ];
  }, []);
  return (
    <div>
      <Table
        scroll={{ x: "300px" }}
        columns={columns}
        dataSource={dataSource}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              //   console.log(record);
              history.push(`location/${record._id}`);
            },
          };
        }}
      />
    </div>
  );
}
