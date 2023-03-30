import axios from "axios";

export const getProductsData = () => {
  // try {
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   const { data } = await axios.get(`http://localhost:3004/products`, config);
  //   return data;
  // } catch (err) {
  //   throw new Error(err);
  // }
  return axios.get("http://localhost:3004/products");
};

export const getProductById = async (id) => {
  const response = await axios.get(`http://localhost:3004/products/${id}`);
  return response.data;
};

export const addProduct = async (product) => {
  const response = await axios.post(`http://localhost:3004/products`, product);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(`http://localhost:3004/products/${id}`);
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
  // lấy id gọi api, lưu vào state
  // lấy state render ra màn hình

  const response = await axios.put(
    `http://localhost:3004/products/${object.id}`,
    object.product
  );
  return response.data;
};
