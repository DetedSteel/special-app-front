import axios from "axios";
import { envConfig } from "../../envConfig";

export const axiosInstance = axios.create({
  baseURL: envConfig.apiUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: envConfig.telegramAuth,
  },
  withCredentials: true,
});
