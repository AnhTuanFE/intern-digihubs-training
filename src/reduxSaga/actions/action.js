import * as types from "../constants/constant";

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

// truyền vào id rồi lấy sp theo id đó, nếu lấy được thì nó nhận vào cái object/array mà
// API trả về. lấy cái object/array trả về luôn
// TEST SAGA
export const testGetProductRequest = (payload) => ({
  type: types.TEST_GET_LIST_PRODUCT_REQUEST,
  payload,
});
// lúc này cái payload này là cái object/array do api trả về
export const testGetProductSuccess = (payload) => ({
  type: types.TEST_GET_LIST_PRODUCT_SUCCESS,
  payload,
});

// nếu không lấy được data từ api nó sẽ trả về lỗi error cho action này
export const testGetProductFailure = (error) => ({
  type: types.TEST_GET_LIST_PRODUCT_FAILURE,
  error,
});

export const loginAction = (payload) => {
  return {
    type: types.LOGIN,
    payload,
  };
};

export const logoutAction = () => {
  return {
    type: types.LOGOUT,
  };
};

export const registerActionRequest = (payload) => {
  return {
    type: types.REGISTER_REQUEST,
    payload,
  };
};
export const registerActionSuccess = (payload) => {
  return {
    type: types.REGISTER_SUCCESS,
    payload,
  };
};
export const registerActionFail = (payload) => {
  return {
    type: types.REGISTER_FAILURE,
    payload,
  };
};
export const logoutActionStudio = () => {
  return {
    type: types.LOGOUT_STUDIO,
  };
};

export const loginActionStudioRequest = (payload) => {
  return {
    type: types.LOGIN_STUDIO_REQUEST,
    payload,
  };
};
export const loginActionStudioSuccess = (payload) => {
  return {
    type: types.LOGIN_STUDIO_SUCCESS,
    payload,
  };
};
export const loginActionStudioFailure = (payload) => {
  return {
    type: types.LOGIN_STUDIO_FAILURE,
    payload,
  };
};
