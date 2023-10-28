import React from "react";
import { Link } from "react-router-dom";

const DesktopHeader = ({ renderUserNav }) => {
  return (
    <div className="absolute top-0 left-0 z-50 w-full h-20 bg-black/10 backdrop-filter backdrop-blur-sm">
      <div className="flex items-center justify-between h-full mx-auto max-w-[90%]">
        <Link to={"/"} className="flex items-end">
          <img
            src={process.env.PUBLIC_URL + "/img/favicon.ico"}
            className="w-10 h-10"
            alt="logo"
          />
          <span className="text-[20px] leading-none font-semibold text-purple-500">
            licks
          </span>
        </Link>
        <div className="flex items-center w-[250px] px-3 search gap-x-3 bg-slate-700 rounded-xl">
          <input
            type="text"
            placeholder="Tìm kiếm phim yêu thích"
            className="flex-1 py-2 text-sm text-white bg-transparent border-none outline-none"
          />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-x-3">{renderUserNav()}</div>
      </div>
    </div>
  );
};

export default DesktopHeader;
