import { combineReducers } from "redux";
// import postsReducer from "./reducer";
import {
  getListProductsReducer,
  productReducer,
  addProductReducer,
  deleteProductReducer,
  updateProductReducer,
} from "./reducer";

const rootReducer = combineReducers({
  productsList: getListProductsReducer,
  productId: productReducer,
  productAdd: addProductReducer,
  productDelete: deleteProductReducer,
  productUpdate: updateProductReducer,
});
export default rootReducer;
