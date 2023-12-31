import axios from "axios";
import { BASE_URL, configHeader, https } from "./config";

export const movieServ = {
  getListMovie: () => https.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"),
  getScheduleByTheater: () =>
    https.get("/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01"),
  getInfoMovie: (id) => https.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`),
  getListTicketOffice: (id) =>
    https.get(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`),
  getListMovieWithPagination: (page) =>
    https.get(
      `/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP09&soTrang=${page}&soPhanTuTrenTrang=10`
    ),
};

export const userServ = {
  get: () => https.get("/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP02"),
  register: (data) => https.post("QuanLyNguoiDung/DangKy", data),
  delete: (account) =>
    https.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${account}`),
  add: (data) => https.post("/QuanLyNguoiDung/ThemNguoiDung", data),
  update: (user) =>
    https.post("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", user),
};
