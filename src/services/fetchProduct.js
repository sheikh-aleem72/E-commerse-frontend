import { axiosInstance } from "../helpers/axiosInstance";

async function fetchProduct(id) {
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default fetchProduct;
