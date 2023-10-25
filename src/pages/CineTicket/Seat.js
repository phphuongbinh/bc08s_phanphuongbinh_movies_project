import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { selectSeat } from "../../redux/movieSlice";

const Seat = ({ item }) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const handleCheckSeat = (item) => {
    console.log(item);
    dispatch(selectSeat(item));
    setChecked(!checked);
  };
  return (
    <button
      className={`w-10 h-10 font-semibold duration-300 border-2 rounded-lg  shadow-sm} ${
        item.loaiGhe === "Thuong"
          ? "border-white/50 shadow-white/80"
          : "border-yellow-600 shadow-yellow-600"
      }  ${
        checked
          ? "border-blue-500 shadow-primary"
          : "hover:border-primary hover:shadow-primary "
      }`}
      key={item.maGhe}
      onClick={() => handleCheckSeat(item)}
    >
      {item.tenGhe}
    </button>
  );
};

export default Seat;
