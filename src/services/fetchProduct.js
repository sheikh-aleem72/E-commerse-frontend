import { axiosInstance } from "../helpers/axiosInstance";

export async function fetchProduct(id) {
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
