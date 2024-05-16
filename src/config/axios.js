import axios from "axios";
import { toast } from "react-toastify";
import { baseUrl } from "../URls";

const axiosInstance = axios.create({
  baseURL:baseUrl
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("game_zone_token");
    config.headers = {
      Authorization: token,
      token: token,
      ...config.headers,
    };
    return config;
  },
  (err) => Promise.reject(err)
);

const errorHandler = (error) => {
  if (error?.response?.data?.message) {
    toast.error(error?.response?.data?.message);
  }
  // return Promise.reject(error);
};

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return errorHandler(error);
  }
);

export default axiosInstance;