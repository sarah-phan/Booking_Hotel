import React, { useMemo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select, Table } from "antd";
import { actFetchListValueate, actGetRooms } from "./module/action";

export default function AdminValueate(props) {
  const { history } = props;
  const [roomId, setRoomId] = useState('')
  const dataSource = useSelector((state) => state.getListValueateReducer.data);
  const rooms = useSelector((state) => state.getListValueateReducer.rooms);
  const dispatch = useDispatch();

  useEffect(() => {
    if (roomId) dispatch(actFetchListValueate(roomId));
  }, [roomId]);

  useEffect(() => {
    dispatch(actGetRooms());
  }, []);

  const columns = useMemo(() => {
    return [
      {
        title: "Content",
        dataIndex: "content",
        width: "450px",
      },
    ];
  }, []);

  return (
    <div>
      <label>Select Room:</label>
      <Select
        style={{ minWidth: '250px' }}
        placeholder={'select room'}
        onChange={(value) => setRoomId(value)}
        options={(rooms || []).map(item => ({ ...item, key: item._id, value: item._id, label: item.name }))}
      />
      <div style={{ marginTop: '1em' }} className="title"> TABLE OF VALUEATES </div>
      <Table
        scroll={{ x: "600px" }}
        columns={columns}
        dataSource={dataSource}
        rowKey={(row) => `row-${row._id}`}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              history.push(`valueate/${record._id}`);
            },
          };
        }}
      />
    </div>
  );
}
