import React, { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "antd";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons"
import { actFetchListUserAdmin, actGetLocations } from "./module/action";

export default function AdminUserAdmin(props) {
  const { history } = props;
  const dataSource = useSelector((state) => state.getListUserAdminReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchListUserAdmin());
  }, []);

  const columns = useMemo(() => {
    return [
      {
        title: "Name",
        dataIndex: "name",
        width: "200px",
      },
      {
        title: "Email",
        dataIndex: "email",
        width: "220px",
      },
      {
        title: "Phone",
        dataIndex: "phone",
        width: "100px",
      },
      {
        title: "Birthday",
        dataIndex: "birthday",
        width: "250px",
      },
      {
        title: "Gender",
        dataIndex: "gender",
        width: "70px",
        render: (val) => val ? 'Nam' : 'Nữ'
      },
      {
        title: "Adress",
        dataIndex: "address",
        width: "250px",
      }
    ];
  }, []);
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
              history.push(`users/${record._id}`);
            },
          };
        }}
      />
    </div>
  );
}
