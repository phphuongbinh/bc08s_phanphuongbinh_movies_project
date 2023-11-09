import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import axios from "axios";
import { BASE_URL, configHeader } from "../../services/config";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setInfo } from "../../redux/userSlice";
import { userLocalStorage } from "../../services/localServices";

const FormLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    axios
      .post(`${BASE_URL}/QuanLyNguoiDung/DangNhap`, values, {
        headers: configHeader(),
      })
      .then((result) => {
        dispatch(setInfo(result.data.content));
        message.success("Đăng nhập thành công");
        userLocalStorage.set(result.data.content);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        message.error("Đăng nhập thất bại");
      });
  };
  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-blue-600">Login</h3>
      <Form
        name="normal_login"
        className="w-full login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="taiKhoan"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon " />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="matKhau"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            className="bg-purple-400"
            noStyle
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="text-blue-700 login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="block w-full bg-blue-500 login-form-button"
          >
            Log in
          </Button>
          Or{" "}
          <Link to="/register" className="text-blue-700">
            register now!
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormLogin;
