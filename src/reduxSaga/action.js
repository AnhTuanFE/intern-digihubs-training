import * as types from "./constant";

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
//=================================================
export const getProductRequest = (id) => ({
  type: types.GET_PRODUCT_REQUEST,
  id,
});

export const getProductSuccess = (product) => ({
  type: types.GET_PRODUCT_SUCCESS,
  product,
});

export const getProductFailure = (error) => ({
  type: types.GET_PRODUCT_FAILURE,
  error,
});
//==
export const addProductRequest = (payload) => ({
  type: types.ADD_PRODUCT_REQUEST,
  payload,
});
export const addProductSuccess = (product) => ({
  type: types.ADD_PRODUCT_SUCCESS,
  product,
});

export const addProductFailure = (error) => ({
  type: types.ADD_PRODUCT_FAILURE,
  error,
});

//==
export const deleteProductRequest = (id) => ({
  type: types.DELETE_PRODUCT_REQUEST,
  id,
});
export const deleteProductSuccess = (product) => ({
  type: types.DELETE_PRODUCT_SUCCESS,
  product,
});

export const deleteProductFailure = (error) => ({
  type: types.DELETE_PRODUCT_FAILURE,
  error,
});

//====
// const payload = {
//   id: 0,
//   product: {},
// };
export const updateProductRequest = (payload) => ({
  type: types.UPDATE_PRODUCT_REQUEST,
  payload,
});
export const updateProductSuccess = (product) => ({
  type: types.UPDATE_PRODUCT_SUCCESS,
  product,
});

export const updateProductFailure = (error) => ({
  type: types.UPDATE_PRODUCT_FAILURE,
  error,
});

// set lại product
/*
payload({
  name: "",

})
*/
export const setProduct = (payload) => ({
  type: types.SET_PRODUCT,
  payload,
});
