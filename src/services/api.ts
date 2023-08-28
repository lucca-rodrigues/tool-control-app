import axios from "axios";
import { clearToken, getToken } from "../utils";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    if (token) {
      config.headers = {
        token: `${token}`,
        ContentType: "application/json",
      };
    }
    return config;
  },
  (error) => {
    console.log("API ERROR ", error);
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      clearToken();
    }
    return Promise.reject(error);
  }
);

export { api };
