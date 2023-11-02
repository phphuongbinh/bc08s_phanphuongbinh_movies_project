import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout className="admin-page">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Link to={"/"} className="flex items-end p-3">
          <img
            src={process.env.PUBLIC_URL + "/img/favicon.ico"}
            className="w-10 h-10"
            alt="logo"
          />
          {!collapsed && (
            <span className="text-[20px] leading-none font-semibold text-purple-500">
              licks
            </span>
          )}
        </Link>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Users",
              onClick: () => navigate("/admin"),
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Movies",
              onClick: () => navigate("movies"),
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            background: "#001529",
          }}
        ></Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Admin;
