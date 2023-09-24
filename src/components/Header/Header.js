import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
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
        <div className="flex gap-x-3">
          <button
            onClick={handleLogin}
            className="py-2 px-5 rounded-lg bg-purple-500 text-white shadow shadow-purple-400"
          >
            Đăng Nhập
          </button>
          <button className="py-2 px-5 rounded-lg border border-purple-500 text-purple-500 shadow shadow-purple-400">
            Đăng Ký
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
