import React from "react";
import { Form, Input, message, Select, Button } from "antd";
import { userServ } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const { Option } = Select;

const UpdateUser = () => {
  const navigate = useNavigate();
  const { infoUserUpdate } = useSelector((state) => state.userSlice);
  const [form] = Form.useForm();
  const onFinish = (data) => {
    userServ
      .update(data)
      .then((result) => {
        message.success("Cập nhật thành công");
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className=" h-[500px]">
      <h2 className="mb-4 text-2xl font-semibold">Cập nhật người dùng</h2>
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          hoTen: infoUserUpdate.hoTen,
          taiKhoan: infoUserUpdate.taiKhoan,
          taiKhoan: infoUserUpdate.taiKhoan,
          email: infoUserUpdate.email,
          soDt: infoUserUpdate.soDT,
          matKhau: infoUserUpdate.taiKhoan,
          maLoaiNguoiDung: infoUserUpdate.maLoaiNguoiDung,
          maNhom: "GP01",
          prefix: "+84",
        }}
        className="grid grid-cols-2 gap-x-5 "
        scrollToFirstError
      >
        <Form.Item
          name="hoTen"
          rules={[
            {
              required: true,
              message: "Nhập tên của bạn",
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="Họ tên" />
        </Form.Item>
        <Form.Item
          name="taiKhoan"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tài khoản",
              whitespace: true,
            },
          ]}
        >
          <Input
            placeholder="Tài khoản"
            defaultValue={infoUserUpdate.taiKhoan}
            disabled
          />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "Email không chính xác",
            },
            {
              required: true,
              message: "Vui lòng nhập E-mail!",
            },
          ]}
        >
          <Input placeholder="Email" defaultValue={infoUserUpdate.email} />
        </Form.Item>

        <Form.Item
          name="matKhau"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu!",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            placeholder="Mật khẩu"
            defaultValue={infoUserUpdate.matKhau}
          />
        </Form.Item>

        <Form.Item
          name="soDt"
          rules={[
            {
              required: true,
              message: "Nhập số điện thoại",
            },
          ]}
        >
          <Input
            style={{
              width: "100%",
            }}
            defaultValue={infoUserUpdate.soDT}
            placeholder="Số điện thoại"
          />
        </Form.Item>
        <Form.Item
          name="maLoaiNguoiDung"
          rules={[
            {
              required: true,
              message: "Chọn lọai người dùng!",
            },
          ]}
        >
          <Select
            placeholder="Chọn loại người dùng"
            defaultValue={infoUserUpdate.maLoaiNguoiDung}
          >
            <Option value="KhachHang">Khách Hàng</Option>
            <Option value="QuanTri">Quản trị</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="maNhom"
          rules={[
            {
              required: true,
              message: "Chọn mã nhóm!",
            },
          ]}
        >
          <Select placeholder="Chọn nhóm người dùng" defaultValue="GP01">
            <Option value="GP01">GP01</Option>
          </Select>
        </Form.Item>
        <Form.Item className="col-span-2">
          <Button type="primary" htmlType="submit" className="mr-2 bg-blue-500">
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateUser;
