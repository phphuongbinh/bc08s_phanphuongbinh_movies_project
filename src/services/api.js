import axios from "axios";
import { BASE_URL, configHeader, https } from "./config";

export const movieServ = {
  getListMovie: () => https.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"),
  getScheduleByTheater: () =>
    https.get("/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP02"),
  getInfoMovie: (id) => https.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`),
  getListTicketOffice: (id) =>
    https.get(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`),
  getListMovieWithPagination: (page) =>
    https.get(
      `/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=${page}&soPhanTuTrenTrang=10`
    ),
};
