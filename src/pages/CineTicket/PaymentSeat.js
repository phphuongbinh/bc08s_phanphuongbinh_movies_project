import React from "react";
import { useSelector } from "react-redux";

const PaymentSeat = ({ info }) => {
  const { seat } = useSelector((state) => state.movieSlice);
  // console.log(seat.map((item) => item.giaVe).reducer());
  return (
    info && (
      <div className="px-3 mr-8 text-white border rounded-lg shadow-md border-primary shadow-primary">
        <h4 className="py-5 text-3xl text-center border-b text-primary border-white/50">
          <span>
            {seat.length > 0
              ? seat
                  ?.reduce((prev, { giaVe }) => prev + giaVe, 0)
                  .toLocaleString()
              : 0}{" "}
          </span>
          vnđ
        </h4>
        <div className="flex items-center justify-between py-5 border-b border-white/50">
          <span className="font-semibold">Cụm rạp:</span>
          <span className="text-violet-500">{info.tenCumRap}</span>
        </div>
        <div className="flex items-center justify-between py-5 border-b border-white/50">
          <span className="font-semibold">Địa chỉ:</span>
          <span className="text-violet-500">{info.diaChi}</span>
        </div>
        <div className="flex items-center justify-between py-5 border-b border-white/50">
          <span className="font-semibold">Rạp:</span>
          <span className="text-violet-500">{info.tenRap}</span>
        </div>
        <div className="flex items-center justify-between py-5 border-b border-white/50">
          <span className="font-semibold">Ngày giờ chiếu:</span>
          <span className="text-violet-500">
            {info.ngayChieu} -{" "}
            <span className="text-red-600">{info.gioChieu}</span>
          </span>
        </div>
        <div className="flex items-center justify-between py-5 border-b border-white/50">
          <span className="font-semibold">Tên Phim:</span>
          <span className="text-violet-500">{info.tenPhim}</span>
        </div>
        <div className="flex items-center justify-between gap-2 py-5 border-b border-white/50">
          <span className="font-semibold ">Ghế đã chọn:</span>
          <div>
            {seat.map((item) => (
              <span className="text-violet-500" key={item.maGhe}>
                Ghế {item.tenGhe}
                {", "}
              </span>
            ))}
          </div>
        </div>
        <button className="w-full px-5 py-4 mt-6 text-2xl font-bold rounded-lg bg-primary">
          Đặt vé
        </button>
      </div>
    )
  );
};

export default PaymentSeat;
