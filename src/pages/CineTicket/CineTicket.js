import React from "react";
import SelectSeat from "./SelectSeat";
import PaymentSeat from "./PaymentSeat";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getListTicketOffice, movieServ } from "../../services/api";

const CineTicket = () => {
  const { maLichChieu } = useParams();
  const [infoTicketOffice, setInfoTicketOffice] = useState({});
  useEffect(() => {
    movieServ
      .getListTicketOffice(maLichChieu)
      .then((result) => {
        setInfoTicketOffice(result.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="grid grid-cols-3 mt-24">
      <SelectSeat listSeat={infoTicketOffice.danhSachGhe} />
      <PaymentSeat info={infoTicketOffice.thongTinPhim} />
    </div>
  );
};

export default CineTicket;
