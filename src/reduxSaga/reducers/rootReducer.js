import { combineReducers } from "redux";
import * as productReducers from "./productReducers";
import * as userReducers from "./userReducers";

const rootReducer = combineReducers({
  productsList: productReducers.getListProductsReducer,
  productId: productReducers.productReducer,
  productAdd: productReducers.addProductReducer,
  productDelete: productReducers.deleteProductReducer,
  productUpdate: productReducers.updateProductReducer,
  dataTestProduct: productReducers.testGetProductReducer,
  dataLogin: userReducers.loginReducer,
  dataRegister: userReducers.registerReducer,
  userInformation: userReducers.loginStudioReducer,
});
export default rootReducer;
