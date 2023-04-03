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
  testGetDataProduct,
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
  testGetProductSuccess,
  testGetProductFailure,
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
    // take chờ action dispatch sau đó nó sẽ thực hiện
    // các worker bên dưới
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
// takeLatest xử lý action cuối cùng, action cũ chưa
// thực hiện xong thì kết thúc nó không cho nó chạy
// => phù hợp cho việc hạn chế việc dispatch action nhiều
// không cần thiết
export function* updateProductSaga() {
  yield takeLatest(types.UPDATE_PRODUCT_REQUEST, updateProductSa);
}

// test saga
function* testproduct(action) {
  // action bên trên là action testGetProductRequest, cái này nó sẽ nhận id dưới dạng payload
  try {
    // truyền vào payload (id) khi gọi action request để api chạy
    // =>  cần api. Cái product là dữ liệu api trả về
    const product = yield call(testGetDataProduct, action.payload);
    // gọi đến cái action success để cho action lấy được data
    //=> cần action success
    yield put(testGetProductSuccess(product));
  } catch (error) {
    // gọi đến action failure để action lấy được error
    yield put(testGetProductFailure(error));
  }
}
export function* testProductSaga() {
  // mỗi khi action có request thì sẽ gọi cái worker testproduct
  // Saga khi bắt action nó không trả về cái gì hết.
  // yield takeLatest(types.TEST_GET_LIST_PRODUCT_REQUEST, testproduct);// chạy ok (cách 1)
  // yield takeEvery(types.TEST_GET_LIST_PRODUCT_REQUEST, testproduct);//chạy ok (cách 2)
  //cách 3 start
  while (true) {
    const action = yield take(types.TEST_GET_LIST_PRODUCT_REQUEST);
    yield call(testproduct, action);
  }
  //cách 3 end
}
//===============================================
// all gom nhóm nhiều effect để thực hiện
const jobSagas = [
  fork(getListProductsSaga),
  all([getIdProductSaga()]),
  all([addProductSaga()]),
  all([deleteProductSaga()]),
  all([updateProductSaga()]),
  // all([testProductSaga()]), (cách 1 + 2)
  fork(testProductSaga), // cách 3
];
export default jobSagas;
//===============================================
