import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, Fragment } from "react";
import { Table, Tag, Space } from "antd";
import {
  AudioOutlined,
  EditOutlined,
  DeleteOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

import { NavLink } from "react-router-dom";

import moment from "moment";

import { actFetchListUser } from "./module/action";

export default function UserAdmin() {
  const dataUser = useSelector((state) => state.getUserReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchListUser());
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      key: "birthday",
      render: (user, index) => {
        return (
          <Fragment key={index}>
            {user
              ? moment(user, "YYYY-MM-DDTHH:mm:ss.sssZ").format("DD.MM.YYYY")
              : ""}
          </Fragment>
        );
      },
    },
    {
      title: "Hành Động ",
      dataIndex: "id",
      render: (text, film, index) => {
        return (
          <Fragment>
            <NavLink key={1} className="mr-2 text-2xl" to={`/admin/users`}>
              <EditOutlined style={{ color: "blue" }} />
            </NavLink>
            <span
              key={2}
              style={{ cursor: "pointer" }}
              className="mr-2 text-2xl"
            >
              <DeleteOutlined style={{ color: "red" }} />
            </span>
          </Fragment>
        );
      },
    },
  ];

  const data = dataUser;
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
