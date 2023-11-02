import React from "react";
import { Space, Table, Tag, message } from "antd";
import { useEffect } from "react";
import { userServ } from "../../services/api";
import { useState } from "react";
const TableUser = () => {
  const [listUser, setListUser] = useState([]);
  const fetchListUser = async () => {
    try {
      const result = await userServ.get();
      setListUser(result.data.content);
    } catch (error) {
      console.log(error);
    }
  };
  const columns = [
    {
      title: "Họ và tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Tài khoản",
      dataIndex: "account",
      key: "account",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "SĐT",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Loại",
      key: "type",
      dataIndex: "type",
      render: (text) => {
        if (text === "KhachHang") {
          return <Tag color="green">Khách hàng</Tag>;
        } else {
          return <Tag color="red">Quản trị</Tag>;
        }
      },
    },
    {
      title: "Thao tác",
      key: "action",
      render: (_, { account }) => (
        <div className="flex gap-2">
          <button className="px-2 py-1 rounded-lg text-white bg-blue-500 hover:bg-blue-600 duration-300">
            Sửa
          </button>
          <button
            onClick={() => {
              handleDelete(account);
            }}
            className="px-2 py-1 rounded-lg text-white bg-red-500 hover:bg-red-600 duration-300"
          >
            Xóa
          </button>
        </div>
      ),
    },
  ];
  const handleDelete = (account) => {
    console.log(account);
    userServ
      .delete(account)
      .then((result) => {
        message.success("Xóa thành công");
        fetchListUser();
      })
      .catch((err) => {
        message.error(err.response.data.content);
        console.log(err);
      });
  };
  useEffect(() => {
    fetchListUser();
  }, []);
  const columnHeader = listUser.map((item, index) => ({
    key: index,
    name: item.hoTen,
    email: item.email,
    account: item.taiKhoan,
    type: item.maLoaiNguoiDung,
    phone: item.soDT,
  }));
  console.log(columnHeader);
  return (
    <Table columns={columns} dataSource={columnHeader} className="pl-[200px]" />
  );
};
export default TableUser;
