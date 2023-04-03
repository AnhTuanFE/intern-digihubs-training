import { all } from "redux-saga/effects";
import jobSagas from "./saga";

export default function* rootSaga() {
  yield all([...jobSagas]);
}
