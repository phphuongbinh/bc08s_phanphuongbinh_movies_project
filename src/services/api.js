import axios from "axios";
import { BASE_URL, configHeader } from "./config";

export const getListMovie = () => {
  return axios({
    url: `${BASE_URL}/QuanLyPhim/LayDanhSachPhim?maNhom=GP15`,
    method: "GET",
    headers: configHeader(),
  });
};

export const getMovieByTheater = () => {
  return axios({
    url: `${BASE_URL}/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`,
    method: "GET",
    headers: configHeader(),
  });
};

export const getInfoMovie = (id) => {
  return axios({
    url: `${BASE_URL}/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
    method: "GET",
    headers: configHeader(),
  });
};
