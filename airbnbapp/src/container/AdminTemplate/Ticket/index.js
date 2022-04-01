import React, { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";
import { actFetchListTicket, actGetUsers, actGetRooms } from "./module/action";
import moment from "moment";

export default function AdminTicket(props) {
  const { history } = props;
  const dataSource = useSelector((state) => state.getListTicketReducer.data);
  const rooms = useSelector((state) => state.getListTicketReducer.rooms) || [];
  const users = useSelector((state) => state.getListTicketReducer.users) || [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchListTicket());
    dispatch(actGetRooms())
    dispatch(actGetUsers())
  }, []);
  const columns = useMemo(() => {
    return [
      {
        title: "CheckIn",
        dataIndex: "checkIn",
        width: "220px",
        render: (value, rec, index) => moment(value, 'YYYY-MM-DDTHH:mm:ss.sssZ').format('DD/MM/YYYY HH:mm:ss')
      },
      {
        title: "CheckOut",
        dataIndex: "checkOut",
        width: "220px",
        render: (value, rec, index) => moment(value, 'YYYY-MM-DDTHH:mm:ss.sssZ').format('DD/MM/YYYY HH:mm:ss')
      },
      {
        title: "User",
        dataIndex: "userId",
        width: "220px",
        render: (value, rec, index) => value.name || ''
      },
      {
        title: "Room",
        dataIndex: "roomId",
        width: "220px",
        render: (value, rec, index) => value.name || ''
      },
    ];
  }, [users, rooms]);

  return (
    <div>
      <Table
        scroll={{ x: "1200px" }}
        columns={columns}
        dataSource={dataSource}
        rowKey={(row) => `row-${row._id}`}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              history.push(`ticket/${record._id}`);
            },
          };
        }}
      />
    </div>
  );
}
