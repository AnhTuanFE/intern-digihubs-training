import axios from "axios";
import BaseURL from "./baseURL";

export const getProductsData = () => {
  return axios.get(`${BaseURL.baseURL}/products`);
};

export const getProductById = async (id) => {
  const response = await axios.get(`${BaseURL.baseURL}/products/${id}`);
  return response.data;
};

export const addProduct = async (product) => {
  const response = await axios.post(`${BaseURL.baseURL}/products`, product);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(`${BaseURL.baseURL}/products/${id}`);
  return response.data;
};

// const ob = {
//   id: 1,
//   product: {
//     name: "",
//     describe: "",
//     cost: "",
//     image: "",
//   },
// };
export const updateProduct = async (object) => {
  const response = await axios.put(
    `${BaseURL.baseURL}/products/${object.id}`,
    object.product
  );
  return response.data;
};

// export const testGetDataProduct = async (id) => {
// const response = await axios.get(`${BaseURL.baseURL}/products/${id}`);
// console.log("API xem api trả về cái gì", response);
// return response.data;
// };

export const testGetDataProduct = (id) => {
  return axios.get(`${BaseURL.baseURL}/products/${id}`);
};
