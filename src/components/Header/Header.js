import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLocalStorage } from "../../services/localServices";

const Header = () => {
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.userReducer);
  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    userLocalStorage.remove();
    window.location.reload();
  };
  const renderUserNav = () => {
    if (info) {
      return (
        <>
          <div className="flex gap-x-3 items-center mr-4">
            <img
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="avatar"
              className="rounded-full object-cover w-8 h-8"
            />
            <span className="font-semibold ">{info.hoTen}</span>
          </div>
          <button
            onClick={handleLogout}
            className="py-2 px-5 rounded-lg bg-purple-500 text-white shadow shadow-purple-400"
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
            className="py-2 px-5 rounded-lg bg-purple-500 text-white shadow shadow-purple-400"
          >
            Đăng Nhập
          </button>
          <button className="py-2 px-5 rounded-lg border border-purple-500 text-purple-500 shadow shadow-purple-400">
            Đăng Ký
          </button>
        </>
      );
    }
  };
  return (
    <div className="shadow-lg h-20">
      <div className="max-w-7xl mx-auto  h-full flex items-center justify-between">
        <Link to={"/"} className="flex items-end">
          <img
            src={process.env.PUBLIC_URL + "/img/favicon.ico"}
            className="w-10 h-10"
            alt="logo"
          />
          <span className="text-[20px] leading-none font-semibold text-purple-700">
            licks
          </span>
        </Link>
        <div className="flex gap-x-3 items-center">{renderUserNav()}</div>
      </div>
    </div>
  );
};

export default Header;
