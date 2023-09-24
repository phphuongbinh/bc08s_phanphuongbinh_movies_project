import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

const FormLogin = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div>
      <h3 className="text-3xl text-blue-600 font-bold mb-8">Login</h3>
      <Form
        name="normal_login"
        className="login-form w-full"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
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
          name="password"
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

          <a className="login-form-forgot text-blue-700" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button bg-blue-500 block w-full"
          >
            Log in
          </Button>
          Or{" "}
          <a href="" className="text-blue-700">
            register now!
          </a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormLogin;