import { combineReducers } from "redux";
// import postsReducer from "./reducer";
import {
  postsReducer,
  getListProductsReducer,
  getDetailProductsReducer,
} from "./reducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  productsList: getListProductsReducer,
  detailProduct: getDetailProductsReducer,
});
export default rootReducer;
