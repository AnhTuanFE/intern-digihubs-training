import { combineReducers } from "redux";
import {
  getListProductsReducer,
  productReducer,
  addProductReducer,
  deleteProductReducer,
  updateProductReducer,
  testGetProductReducer,
  loginReducer,
  registerReducer,
} from "./reducer";

const rootReducer = combineReducers({
  productsList: getListProductsReducer,
  productId: productReducer,
  productAdd: addProductReducer,
  productDelete: deleteProductReducer,
  productUpdate: updateProductReducer,
  dataTestProduct: testGetProductReducer,
  dataLogin: loginReducer,
  dataRegister: registerReducer,
});
export default rootReducer;
