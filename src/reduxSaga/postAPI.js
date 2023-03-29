import axios from "axios";
export const getPostData = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};
export const getProductsData = () => {
  // try {
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   const { data } = await axios.get(`http://localhost:3004/products`, config);
  //   console.log("=> Data API", data);
  //   return data;
  // } catch (err) {
  //   throw new Error(err);
  // }
  console.log("Chào anh em");
  return axios.get("http://localhost:3004/products");
};
// lấy id gọi api rồi lấy data
export const getDetailproduct = (id) => {
  console.log("==> id post api nhận", id);
  return axios.get(`https://jsonplaceholder.typicode.com/posts/?id=${id}`);
};

// export const getDetailproduct = (d) => {
//   return axios.get(`https://jsonplaceholder.typicode.com/posts/?id=1`);
// };
