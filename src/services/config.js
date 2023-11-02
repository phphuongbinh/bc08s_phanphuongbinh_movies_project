import axios from "axios";
import { userLocalStorage } from "./localServices";
import { store } from "../redux/store";
import { setLoadingOff, setLoadingOn } from "../redux/spinnerSlice";

export const TOKEN_CYBER =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOCIsIkhldEhhblN0cmluZyI6IjA3LzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwOTc2OTYwMDAwMCIsIm5iZiI6MTY4Njc2MjAwMCwiZXhwIjoxNzA5OTE3MjAwfQ.KMixzquIcyG1HcsZ_iekv3cHfqWMebGVfzp349mNosg";

export const configHeader = () => {
  return {
    TokenCybersoft: TOKEN_CYBER,
  };
};

export const BASE_URL = "https://movienew.cybersoft.edu.vn/api";

export const URL_BANNER = "https://64d6fb222a017531bc12e7c8.mockapi.io/film";

export const https = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN_CYBER,
    Authorization: "bearer " + userLocalStorage.get()?.accessToken,
  },
});

// Add a request interceptor
https.interceptors.request.use(
  function (config) {
    store.dispatch(setLoadingOn());
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
https.interceptors.response.use(
  function (response) {
    store.dispatch(setLoadingOff());
    return response;
  },
  function (error) {
    store.dispatch(setLoadingOff());
    return Promise.reject(error);
  }
);
