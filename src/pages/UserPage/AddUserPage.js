import React from "react";
import { Form, Input, message, Select, Button } from "antd";
import { userServ } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
const { Option } = Select;

const AddUserPage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (data) => {
    userServ
      .add(data)
      .then((result) => {
        console.log(result);
        message.success("Đăng ký thành công");
        navigate("/admin");
      })
      .catch((err) => {
        message.error("Đăng ký thất bại");
        console.log(err);
      });
  };
  return (
    <div className=" h-[500px]">
      <h2 className="text-2xl font-semibold mb-4">Thêm người dùng mới</h2>
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ["zhejiang", "hangzhou", "xihu"],
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
          <Input placeholder="Tài khoản" />
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
          <Input placeholder="Email" />
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
          <Input.Password placeholder="Mật khẩu" />
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
          <Select placeholder="Chọn loại người dùng">
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
          <Select placeholder="Chọn nhóm người dùng">
            <Option value="GP01">GP02</Option>
            {/* <Option value="GP02">GP02</Option>
            <Option value="GP03">GP03</Option>
            <Option value="GP04">GP04</Option>
            <Option value="GP05">GP05</Option>
            <Option value="GP06">GP06</Option>
            <Option value="GP07">GP07</Option>
            <Option value="GP08">GP08</Option>
            <Option value="GP09">GP09</Option>
            <Option value="GP10">GP10</Option>
            <Option value="GP11">GP11</Option>
            <Option value="GP12">GP12</Option>
            <Option value="GP13">GP13</Option>
            <Option value="GP14">GP14</Option>
            <Option value="GP15">GP15</Option> */}
          </Select>
        </Form.Item>
        <Form.Item className="col-span-2">
          <Button type="primary" htmlType="submit" className="bg-blue-500 mr-2">
            Thêm người dùng
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddUserPage;
