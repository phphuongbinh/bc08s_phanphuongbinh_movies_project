import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLocalStorage } from "../../services/localServices";
import { Desktop, Mobile, Tablet } from "../../layout/responsive";
import DesktopHeader from "./DesktopHeader";
import TabletHeader from "./TabletHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.userSlice);
  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    userLocalStorage.remove();
    window.location.reload();
  };
  const handleRegister = () => {
    navigate("/register");
  };
  const renderUserNav = () => {
    if (info) {
      return (
        <>
          <div className="flex items-center mr-4 text-white gap-x-3">
            <img
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="avatar"
              className="object-cover w-8 h-8 rounded-full"
            />
            <span className="font-semibold ">{info.hoTen}</span>
          </div>
          <button
            onClick={handleLogout}
            className="px-5 py-2 text-white bg-purple-500 rounded-lg shadow cursor-pointer shadow-purple-400"
          >
            Đăng Xuất
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            onClick={handleLogin}
            className="px-5 py-2 text-white bg-purple-500 rounded-lg shadow shadow-purple-400"
          >
            Đăng Nhập
          </button>
          <button
            onClick={handleRegister}
            className="px-5 py-2 text-purple-500 border border-purple-500 rounded-lg shadow shadow-purple-400"
          >
            Đăng Ký
          </button>
        </>
      );
    }
  };
  return (
    <>
      <Desktop>
        <DesktopHeader renderUserNav={renderUserNav} />
      </Desktop>
      <Tablet>
        <TabletHeader renderUserNav={renderUserNav} />
      </Tablet>
      <Mobile>
        <MobileHeader renderUserNav={renderUserNav} />
      </Mobile>
    </>
  );
};

export default Header;
