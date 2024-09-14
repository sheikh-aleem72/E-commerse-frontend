import { GiConsoleController } from "react-icons/gi";
import { axiosInstance } from "../helpers/axiosInstance";

export async function fetchLimitedProduct(limit = 5) {
  try {
    const response = await axiosInstance.get(`/products?limit=${limit}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
