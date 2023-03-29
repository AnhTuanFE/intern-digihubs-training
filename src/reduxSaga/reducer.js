import * as types from "./constant";
const INITIAL_STATE = {
  posts: [],
  load: false,
};
export const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_LIST_POST:
      return {
        ...state,
        load: true,
      };
    case types.GET_LIST_POST_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        posts: data,
        load: false,
      };
    default:
      return state;
  }
};
const stateInit = { products: [], load: false };
export const getListProductsReducer = (stateProduct = stateInit, action) => {
  switch (action.type) {
    case types.GET_LIST_PRODUCTS: {
      return {
        ...stateProduct,
        load: true,
      };
    }
    case types.GET_LIST_PRODUCTS_SUCCESS: {
      const { data } = action.payload;
      return {
        ...stateProduct,
        products: data,
        load: false,
      };
    }
    default: {
      return stateProduct;
    }
  }
};

// get sản phẩm thì lấy id
const stateInitDetail = { detailProduct: [], load: false };
export const getDetailProductsReducer = (
  stateDetail = stateInitDetail,
  action
) => {
  switch (action.type) {
    case types.DETAIL_PRODUCTS: {
      console.log("==> reducer get nhận payload", action.payload);
      return {
        ...stateDetail,
        load: true,
      };
    }
    case types.DETAIL_PRODUCTS_SUCCESS: {
      const { data } = action.payload; //id
      console.log("==> reducer success nhận payload", action.payload.data);
      return {
        ...stateDetail,
        detailProduct: data,
        load: false,
      };
    }
    default: {
      return stateDetail;
    }
  }
};
