import axios from "axios";
import { FAKE_STORE_API_KEY } from "./constants";

export const axiosInstance = axios.create({
  baseURL: FAKE_STORE_API_KEY,
});
