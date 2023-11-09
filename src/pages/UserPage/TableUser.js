import React from "react";
import { Space, Table, Tag, message } from "antd";
import { useEffect } from "react";
import { userServ } from "../../services/api";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
const TableUser = () => {
  const [listUser, setListUser] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      render: (_, user) => (
        <div className="flex gap-2">
          <button
            onClick={() =>
              handleUpdate(
                listUser.find((item) => user.account === item.taiKhoan)
              )
            }
            className="px-2 py-1 text-white duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Sửa
          </button>
          <button
            onClick={() => {
              handleDelete(user.account);
            }}
            className="px-2 py-1 text-white duration-300 bg-red-500 rounded-lg hover:bg-red-600"
          >
            Xóa
          </button>
        </div>
      ),
    },
  ];
  const handleDelete = (account) => {
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
  const handleUpdate = (user) => {
    dispatch(updateUser(user));
    navigate("/admin/update");
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
  return <Table columns={columns} dataSource={columnHeader} />;
};
export default TableUser;
