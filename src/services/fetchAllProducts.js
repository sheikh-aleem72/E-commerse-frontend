import { axiosInstance } from "../helpers/axiosInstance";

export async function fetchAllProducts() {
  try {
    const response = await axiosInstance.get("/products");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
