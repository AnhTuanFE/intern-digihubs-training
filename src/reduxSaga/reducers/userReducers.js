import { userConsts } from "../constants";

export const loginReducer = (
  state = { checkLogin: false, userInfo: {} },
  action
) => {
  switch (action.type) {
    case userConsts.LOGIN: {
      return {
        ...state,
        checkLogin: true,
        userInfo: action.payload,
      };
    }
    case userConsts.LOGOUT: {
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
    case userConsts.REGISTER_SUCCESS: {
      return {
        ...state,
        initRegister: action.payload,
      };
    }
    case userConsts.REGISTER_FAILURE: {
      return {
        ...state,
        initRegister: null,
      };
    }
    case userConsts.LOGOUT_STUDIO: {
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
    case userConsts.LOGIN_STUDIO_REQUEST: {
      return {
        loading: true,
      };
    }
    case userConsts.LOGIN_STUDIO_SUCCESS: {
      return {
        loading: false,
        userInformation: action.payload,
      };
    }
    case userConsts.LOGIN_STUDIO_FAILURE: {
      return {
        loading: false,
        error: action.payload,
      };
    }
    case userConsts.LOGOUT_STUDIO: {
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
