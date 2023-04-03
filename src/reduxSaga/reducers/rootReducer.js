import { combineReducers } from "redux";
import {
  getListProductsReducer,
  productReducer,
  addProductReducer,
  deleteProductReducer,
  updateProductReducer,
  testGetProductReducer,
} from "./reducer";

const rootReducer = combineReducers({
  productsList: getListProductsReducer,
  productId: productReducer,
  productAdd: addProductReducer,
  productDelete: deleteProductReducer,
  productUpdate: updateProductReducer,
  dataTestProduct: testGetProductReducer,
});
export default rootReducer;
