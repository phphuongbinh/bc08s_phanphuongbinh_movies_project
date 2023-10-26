import axios from "axios";
import { BASE_URL, configHeader, https } from "./config";

// export const getMovieByTheater = () => {
//   return axios({
//     url: `${BASE_URL}/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`,
//     method: "GET",
//     headers: configHeader(),
//   });
// };

// export const getInfoMovie = (id) => {
//   return axios({
//     url: `${BASE_URL}/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
//     method: "GET",
//     headers: configHeader(),
//   });
// };

// export const getListTicketOffice = (id) => {
//   return axios({
//     url: `https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
//     method: "GET",
//     headers: configHeader(),
//   });
// };

export const movieServ = {
  getListMovie: () => https.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"),
  getScheduleByTheater: () =>
    https.get("/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP02"),
  getInfoMovie: (id) => https.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`),
  getListTicketOffice: (id) =>
    https.get(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`),
};
