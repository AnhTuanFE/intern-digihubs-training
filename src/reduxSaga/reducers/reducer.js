import { type } from "@testing-library/user-event/dist/type";
import * as types from "../constants/constant";

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

//====== get product from id

const initialStateP = {
  product: {},
  error: null,
};

export const productReducer = (state = initialStateP, action) => {
  switch (action.type) {
    case types.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.product,
        error: null,
      };
    case types.GET_PRODUCT_FAILURE:
      return {
        ...state,
        product: null,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

const addProductState = {
  name: "",
  describe: "",
  cost: 0,
  image: "",
};

export const addProductReducer = (state = addProductState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        name: action.product.name,
        describe: action.product.describe,
        cost: action.product.cost,
        image: action.product.image,
      };
    case types.ADD_PRODUCT_FAILURE:
      return {
        ...state,
        name: null,
        describe: null,
        cost: null,
        image: null,
      };
    default:
      return state;
  }
};

const initialStateDelete = {
  product: null,
  error: null,
};

export const deleteProductReducer = (state = initialStateDelete, action) => {
  switch (action.type) {
    case types.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.product,
        error: null,
      };
    case types.DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        product: null,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

const initialStateUpdate = {
  id: 0,
  product: {},
};

export const updateProductReducer = (state = initialStateUpdate, action) => {
  switch (action.type) {
    case types.UPDATE_PRODUCT_SUCCESS:
      console.log("==> action UPDATE_PRODUCT_SUCCESS trả về", action);
      return {
        ...state,
        product: action.product,
      };
    case types.UPDATE_PRODUCT_FAILURE:
      return {
        ...state,
        product: null,
      };
    default:
      return state;
  }
};

export const testGetProductReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case types.TEST_GET_LIST_PRODUCT_SUCCESS: {
      return {
        ...state,
        product: action.payload,
      };
    }
    case types.TEST_GET_LIST_PRODUCT_FAILURE: {
      return {
        ...state,
        product: null,
      };
    }
    default: {
      return state;
    }
  }
};

export const loginReducer = (
  state = { checkLogin: false, userInfo: {} },
  action
) => {
  switch (action.type) {
    case types.LOGIN: {
      return {
        ...state,
        checkLogin: true,
        userInfo: action.payload,
      };
    }
    case types.LOGOUT: {
      return {
        ...state,
        checkLogin: false,
        userInfo: {},
      };
    }
    default: {
      return state;
    }
  }
};

export const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case types.REGISTER_SUCCESS: {
      return {
        ...state,
        initRegister: action.payload,
      };
    }
    case types.REGISTER_FAILURE: {
      return {
        ...state,
        initRegister: null,
      };
    }
    case types.LOGOUT_STUDIO: {
      return {
        ...state,
        initRegister: null,
      };
    }
    default: {
      return state;
    }
  }
};
export const loginStudioReducer = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN_STUDIO_REQUEST: {
      return {
        loading: true,
      };
    }
    case types.LOGIN_STUDIO_SUCCESS: {
      return {
        loading: false,
        userInformation: action.payload,
      };
    }
    case types.LOGIN_STUDIO_FAILURE: {
      return {
        loading: false,
        error: action.payload,
      };
    }
    case types.LOGOUT_STUDIO: {
      return {
        userInformation: null,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
