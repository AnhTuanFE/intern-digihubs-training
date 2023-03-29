import { all } from "redux-saga/effects";
import jobsSaga from "./saga";

export default function* rootSaga() {
  yield all([...jobsSaga]);
}
