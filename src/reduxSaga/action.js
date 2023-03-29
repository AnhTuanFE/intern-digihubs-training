import * as types from "./constant";
import axios from "axios";
export const getListPost = (payload) => {
  return {
    type: types.GET_LIST_POST,
    payload,
  };
};

export const getListPostSuccess = (payload) => {
  return {
    type: types.GET_LIST_POST_SUCCESS,
    payload,
  };
};

export const getListProducts = (payload) => {
  return {
    type: types.GET_LIST_PRODUCTS,
    payload,
  };
};

export const getListProductsSuccess = (payload) => {
  return {
    type: types.GET_LIST_PRODUCTS_SUCCESS,
    payload,
  };
};

export const getDetailProduct = (payload) => {
  // const id = payload;
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };
  // const { data } = axios.get(
  //   `http://localhost:3004/products/?id=${id}`,
  //   config
  // );
  console.log("==> payload action get nhận", payload);
  return {
    type: types.DETAIL_PRODUCTS,
    payload,
  };
};
// nhận id chuyển qua reducer
export const getDetailProductSuccess = (payload) => {
  console.log("==> payload action success nhận", payload);
  const product = payload.data;
  return {
    type: types.DETAIL_PRODUCTS_SUCCESS,
    payload,
  };
};
