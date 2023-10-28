import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { selectSeat, deselectSeat } from "../../redux/movieSlice";

const Seat = ({ item }) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const handleCheckSeat = (item) => {
    if (checked) {
      dispatch(deselectSeat(item.maGhe));
    } else {
      dispatch(selectSeat(item));
    }
    setChecked(!checked);
  };

  return (
    <button
      className={`w-10 h-10 font-semibold duration-300 border-2 rounded-lg  shadow-sm ${
        item.loaiGhe === "Thuong" ? "seat-normal" : `seat-vip`
      } ${
        checked ? "seat-checked" : "hover:border-primary hover:shadow-primary"
      } `}
      key={item.maGhe}
      onClick={() => handleCheckSeat(item)}
    >
      {item.tenGhe}
    </button>
  );
};

export default Seat;
