import React from "react";

const PaymentSeat = ({ info }) => {
  return (
    info && (
      <div className="shadow-md border border-primary shadow-primary px-3 text-white mr-8 rounded-lg">
        <h4 className="text-3xl text-primary text-center py-5 border-b border-white/50">
          0 VND
        </h4>
        <div className="flex justify-between items-center py-5 border-b border-white/50">
          <span className="font-semibold">Cụm rạp:</span>
          <span className="text-violet-500">{info.tenCumRap}</span>
        </div>
        <div className="flex justify-between items-center py-5 border-b border-white/50">
          <span className="font-semibold">Địa chỉ:</span>
          <span className="text-violet-500">{info.diaChi}</span>
        </div>
        <div className="flex justify-between items-center py-5 border-b border-white/50">
          <span className="font-semibold">Rạp:</span>
          <span className="text-violet-500">{info.tenRap}</span>
        </div>
        <div className="flex justify-between items-center py-5 border-b border-white/50">
          <span className="font-semibold">Ngày giờ chiếu:</span>
          <span className="text-violet-500">
            {info.ngayChieu} -{" "}
            <span className="text-red-600">{info.gioChieu}</span>
          </span>
        </div>
        <div className="flex justify-between items-center py-5 border-b border-white/50">
          <span className="font-semibold">Tên Phim:</span>
          <span className="text-violet-500">{info.tenPhim}</span>
        </div>
        <div className="flex justify-between items-center py-5 border-b border-white/50">
          <span className="font-semibold">Cụm rạp:</span>
          <span className="text-violet-500">{info.tenCumRap}</span>
        </div>
        <button className="mt-6 w-full px-5 py-4 bg-primary text-2xl rounded-lg font-bold">
          Đặt vé
        </button>
      </div>
    )
  );
};

export default PaymentSeat;
