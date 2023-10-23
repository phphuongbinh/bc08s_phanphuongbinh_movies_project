import React from "react";
import moment from "moment/moment";
import { NavLink } from "react-router-dom";

const ItemMovie = ({ item }) => {
  return (
    <div className="rounded-2xl">
      <div className="h-[300px] mb-2 cursor-pointer">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={item.hinhAnh}
          alt=""
        />
      </div>
      <h2 className="font-semibold truncate mb-2">{item.tenPhim}</h2>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#E9B824"
            className="w-4 h-4 "
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>

          <span className="text-gray-300 text-sm font-semibold ">
            {item.danhGia}
          </span>
        </div>
        <span>{moment(item.ngayKhoiChieu).format("L")}</span>
      </div>
      <button className="py-3 text-sm font-semibold rounded-lg flex items-center gap-2 text-primary bg-slate-800 w-full justify-center hover:bg-slate-700 transition-all">
        <NavLink to={`/detail/${item.maPhim}`}>Đặt vé ngay </NavLink>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="rgb(168 85 247)"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </button>
    </div>
  );
};

export default ItemMovie;
