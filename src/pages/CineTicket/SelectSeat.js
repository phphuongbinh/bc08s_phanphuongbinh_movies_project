import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { selectSeat } from "../../redux/movieSlice";
import Seat from "./Seat";

const SelectSeat = ({ listSeat }) => {
  return (
    <div
      style={{ perspective: "1000px" }}
      className="flex flex-col items-center col-span-2 text-white"
    >
      <h4 className="mb-2 text-lg font-semibold lg:text-3xl">Màn hình</h4>
      <div
        style={{
          backgroundColor: "rgb(233, 213, 255)",
          transform: "rotateX(-45deg)",
          boxShadow: "0 3px 10px rgba(233, 213, 255,0.75)",
        }}
        className="mb-6 lg:mb-10 w-[90%] h-[30px] lg:w-[700px] lg:h-[50px]"
      ></div>
      <div className="grid grid-cols-12 gap-1 sm:gap-2 sm:grid-cols-16">
        {listSeat?.map((item) => {
          if (item.daDat) {
            return (
              <button
                disabled
                className="text-xs font-semibold duration-300 border-2 border-red-600 rounded-lg shadow-sm sm:text-sm md:text-base w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 shadow-red-600"
                key={item.maGhe}
              >
                {item.tenGhe}
              </button>
            );
          }
          return <Seat item={item} key={item.maGhe} />;
        })}
      </div>
    </div>
  );
};

export default SelectSeat;
