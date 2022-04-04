import React, { useMemo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons"
import { actFetchListRoom, actGetLocations } from "./module/action";

export default function AdminRoom(props) {
  const { history } = props;
  const dataSource = useSelector((state) => state.getListRoomReducer.data);
  const locations = useSelector((state) => state.getListRoomReducer.locations) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchListRoom());
    dispatch(actGetLocations());
  }, []);

  const columns = useMemo(() => {
    return [
      {
        title: "Name",
        dataIndex: "name",
        width: "200px",
      },
      {
        title: "Guests",
        dataIndex: "guests",
        width: "80px",
      },
      {
        title: "Bed room",
        dataIndex: "bedRoom",
        width: "100px",
      },
      {
        title: "Bath",
        dataIndex: "bath",
        width: "100px",
      },
      {
        title: "Description",
        dataIndex: "description",
        width: "250px",
      },
      {
        title: "Price",
        dataIndex: "price",
        width: "120px",
      },
      {
        title: "Elevator",
        dataIndex: "elevator",
        width: "60px",
        render: (value, rec, index) => {
          return value ? <CheckCircleFilled style={{ color: 'green' }} /> : <CloseCircleFilled style={{ color: 'red' }} />
        }
      },
      {
        title: "Hot tub",
        dataIndex: "hotTub",
        width: "60px",
        render: (value, rec, index) => {
          return value ? <CheckCircleFilled style={{ color: 'green' }} /> : <CloseCircleFilled style={{ color: 'red' }} />
        }
      },
      {
        title: "Pool",
        dataIndex: "pool",
        width: "60px",
        render: (value, rec, index) => {
          return value ? <CheckCircleFilled style={{ color: 'green' }} /> : <CloseCircleFilled style={{ color: 'red' }} />
        }
      },
      {
        title: "Indoor fireplace",
        dataIndex: "indoorFireplace",
        width: "60px",
        render: (value, rec, index) => {
          return value ? <CheckCircleFilled style={{ color: 'green' }} /> : <CloseCircleFilled style={{ color: 'red' }} />
        }
      },
      {
        title: "Dryer",
        dataIndex: "dryer",
        width: "60px",
        render: (value, rec, index) => {
          return value ? <CheckCircleFilled style={{ color: 'green' }} /> : <CloseCircleFilled style={{ color: 'red' }} />
        }
      },
      {
        title: "GYM",
        dataIndex: "gym",
        width: "60px",
        render: (value, rec, index) => {
          return value ? <CheckCircleFilled style={{ color: 'green' }} /> : <CloseCircleFilled style={{ color: 'red' }} />
        }
      },
      {
        title: "Kitchen",
        dataIndex: "kitchen",
        width: "60px",
        render: (value, rec, index) => {
          return value ? <CheckCircleFilled style={{ color: 'green' }} /> : <CloseCircleFilled style={{ color: 'red' }} />
        }
      },
      {
        title: "Wifi",
        dataIndex: "wifi",
        width: "60px",
        render: (value, rec, index) => {
          return value ? <CheckCircleFilled style={{ color: 'green' }} /> : <CloseCircleFilled style={{ color: 'red' }} />
        }
      },
      {
        title: "Heating",
        dataIndex: "heating",
        width: "60px",
        render: (value, rec, index) => {
          return value ? <CheckCircleFilled style={{ color: 'green' }} /> : <CloseCircleFilled style={{ color: 'red' }} />
        }
      },
      {
        title: "Cable TV",
        dataIndex: "cableTV",
        width: "60px",
        render: (value, rec, index) => {
          return value ? <CheckCircleFilled style={{ color: 'green' }} /> : <CloseCircleFilled style={{ color: 'red' }} />
        }
      },
      {
        title: "Location",
        dataIndex: "locationId",
        width: "250px",
        render: (value, rec, index) => {
          return value?.name || ''
        }
      },
    ];
  }, []);
  return (
    <div>
      <Table
        scroll={{ x: "2000px" }}
        columns={columns}
        dataSource={dataSource}
        rowKey={(row) => `row-${row._id}`}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              history.push(`room/${record._id}`);
            },
          };
        }}
      />
    </div>
  );
}
