import {
  call,
  put,
  takeLatest,
  takeEvery,
  fork,
  all,
  take,
} from "redux-saga/effects";
import {
  getProductsData,
  getProductById,
  addProduct,
  deleteProduct,
  updateProduct,
} from "./API";
import {
  getListProductsSuccess,
  getProductSuccess,
  getProductFailure,
  addProductSuccess,
  addProductFailure,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductSuccess,
  updateProductFailure,
} from "./action";
import * as types from "./constant";

function* getListProducts() {
  try {
    const data = yield call(getProductsData);
    yield put(getListProductsSuccess(data));
  } catch (err) {
    throw new Error(err);
  }
}

export function* getListProductsSaga() {
  // yield takeLatest(types.GET_LIST_PRODUCTS, getListProducts);
  while (true) {
    yield take(types.GET_LIST_PRODUCTS);
    yield fork(getListProducts);
  }
}

//
function* getProduct(action) {
  try {
    const product = yield call(getProductById, action.id);
    yield put(getProductSuccess(product));
  } catch (error) {
    yield put(getProductFailure(error));
  }
}

export function* getIdProductSaga() {
  yield takeLatest(types.GET_PRODUCT_REQUEST, getProduct);
}
//
function* productAdd(action) {
  try {
    const product = yield call(addProduct, action.payload);
    yield put(addProductSuccess(product));
  } catch (error) {
    yield put(addProductFailure(error));
  }
}

export function* addProductSaga() {
  yield takeLatest(types.ADD_PRODUCT_REQUEST, productAdd);
}
//
function* deleteProductSa(action) {
  try {
    const product = yield call(deleteProduct, action.id);
    yield put(deleteProductSuccess(product));
  } catch (error) {
    yield put(deleteProductFailure(error));
  }
}

export function* deleteProductSaga() {
  yield takeLatest(types.DELETE_PRODUCT_REQUEST, deleteProductSa);
}
//----------------------+++++++-------
// const payload = { // payload action
//   id: 0,
//   product: {},
// };
function* updateProductSa(action) {
  try {
    const product = yield call(updateProduct, action.payload);
    yield put(updateProductSuccess(product));
  } catch (error) {
    yield put(updateProductFailure(error));
  }
}

export function* updateProductSaga() {
  yield takeLatest(types.UPDATE_PRODUCT_REQUEST, updateProductSa);
}
//
export default [
  fork(getListProductsSaga),
  all([getIdProductSaga()]),
  all([addProductSaga()]),
  all([deleteProductSaga()]),
  all([updateProductSaga()]),
];
