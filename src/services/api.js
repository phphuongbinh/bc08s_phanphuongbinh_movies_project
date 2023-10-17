import axios from "axios";
import { BASE_URL, configHeader } from "./config";

export const getListMovie = () => {
  return axios({
    url: `${BASE_URL}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
    method: "GET",
    headers: configHeader(),
  });
};
