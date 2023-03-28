import { call, put, takeLatest } from "redux-saga/effects";
import { getPostData } from "./postAPI";
import { getListPostSuccess } from "./action";

// nếu nó nhận 1 action thì nó sẽ chạy logic bên dưới
// => WATCHER : THEO DÕI ACTION
function* getListPostSaga(action) {
  try {
    // call Api lấy data, gán data cho action getListPostSuccess => action trả về data dưới dạng payload
    const data = yield call(getPostData);
    yield put(getListPostSuccess(data));
  } catch (error) {
    //handle error
    throw new Error(error);
  }
}
// với mỗi action là GET_LIST_POST nó hủy mọi tác vụ trước đó và chạy cái callback getListPostSaga
// WORKER: THỰC HIỆN ACTION
function* postsSaga() {
  yield takeLatest("GET_LIST_POST", getListPostSaga);
}

export default postsSaga;
