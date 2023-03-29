import {
  call,
  put,
  takeLatest,
  takeEvery,
  fork,
  all,
  take,
  retry,
} from "redux-saga/effects";
import { getPostData, getProductsData, getDetailproduct } from "./postAPI";
import {
  getListPostSuccess,
  getListProductsSuccess,
  getDetailProductSuccess,
} from "./action";
import * as types from "./constant";

// nếu nó nhận 1 action thì nó sẽ chạy logic bên dưới
// => WATCHER : THEO DÕI ACTION
function* getListPostSaga() {
  try {
    // call Api lấy data, gán data cho action getListPostSuccess => action trả về data dưới dạng payload
    const data = yield call(getPostData);
    yield put(getListPostSuccess(data));
  } catch (error) {
    //handle error
    throw new Error(error);
  }
}

function* getListProductsSaga() {
  try {
    // data từ api
    const data = yield call(getProductsData);
    yield put(getListProductsSuccess(data));
  } catch (err) {
    throw new Error(err);
  }
}

//=========================================
// function* getDetailProductSaga() {
//   try {
//     const data = yield call(getDetailproduct);
//     yield put(getDetailProductSuccess(data));
//   } catch (err) {
//     throw new Error(err);
//   }
// }

// takeLatest: với mỗi action là GET_LIST_POST nó hủy mọi tác vụ trước đó và chạy cái callback getListPostSaga
// WORKER: THỰC HIỆN ACTION
export function* postSaga() {
  // yield takeLatest(types.GET_LIST_POST, getListPostSaga);
  while (true) {
    yield take(types.GET_LIST_POST);
    yield fork(getListPostSaga);
  }
}
export function* productSaga() {
  // yield takeLatest(types.GET_LIST_PRODUCTS, getListProductsSaga);
  while (true) {
    yield take(types.GET_LIST_PRODUCTS);
    yield fork(getListProductsSaga);
  }
}

//WORKER: nhận id từ WATCH, xử lý call api lấy id product và lưu và reducer
function* getDetailProductSaga(idProduct) {
  console.log("worker nhận id từ watcher", idProduct);
  try {
    // truyền id cho hàm call api getDetailproduct
    const data = yield call(getDetailproduct(idProduct));
    // lấy data từ api gọi đến action getDetailProductSuccess
    // reducer nhận data và lưu vào state
    yield put(getDetailProductSuccess(data));
  } catch (err) {
    throw new Error(err);
  }
}
//WATCHER:
export function* detailProductSaga() {
  while (true) {
    // Lắng nghe action DETAIL_PRODUCTS
    const action = yield take(types.DETAIL_PRODUCTS);
    // nhận id từ payload action
    const idProduct = action.payload;
    console.log(
      "==> watcher saga nhận id từ action DETAIL_PRODUCTS ",
      action.payload
    );
    // truyền id cho WORKER xử lý
    yield take(getDetailProductSaga(idProduct));
  }
}

//==========================================
// export function* detailProductSaga() {
//   while (true) {
//     const action = yield take(types.DETAIL_PRODUCTS);
//     const idProduct = action.payload;
//     console.log(
//       "==> watcher saga nhận id từ action DETAIL_PRODUCTS ",
//       idProduct
//     );
//     yield fork(getDetailProductSaga);
//   }
// }
export default [fork(postSaga), fork(productSaga), fork(detailProductSaga)];
