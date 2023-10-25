import React from "react";
import { useDispatch } from "react-redux";
import { selectSeat } from "../../redux/movieSlice";

const SelectSeat = ({ listSeat }) => {
  const dispatch = useDispatch();
  return (
    <div
      style={{ perspective: "1000px" }}
      className="flex flex-col items-center col-span-2 text-white"
    >
      <h4 className="mb-2 text-3xl font-semibold">Màn hình</h4>
      <div
        style={{
          backgroundColor: "rgb(233, 213, 255)",
          height: "70px",
          width: "700px",
          transform: "rotateX(-45deg)",
          boxShadow: "0 3px 10px rgba(233, 213, 255,0.75)",
        }}
        className="mb-10"
      ></div>
      <div className="grid gap-2 grid-cols-16">
        {listSeat?.map((item) => {
          if (item.daDat) {
            return (
              <button
                disabled
                className="w-10 h-10 font-semibold duration-300 border-2 border-red-600 rounded-lg shadow-sm shadow-red-600 hover:border-primary hover:shadow-primary "
                key={item.maGhe}
              >
                {item.tenGhe}
              </button>
            );
          }
          return (
            <button
              className={`w-10 h-10 font-semibold duration-300 border-2 rounded-lg shadow-sm ${
                item.loaiGhe === "Thuong"
                  ? "border-white/50 shadow-white/80"
                  : "border-yellow-600 shadow-yellow-600"
              }  hover:border-primary hover:shadow-primary`}
              key={item.maGhe}
              onClick={() => dispatch(selectSeat(item))}
            >
              {item.tenGhe}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SelectSeat;
