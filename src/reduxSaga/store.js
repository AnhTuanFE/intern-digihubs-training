import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reduxSaga/reducers/rootReducer";
import rootSaga from "../reduxSaga/sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;

/*
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from "../sagas"; // TODO: Next step

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  let finalCreateStore = compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )(createStore)(rootReducer);
  sagaMiddleware.run(rootSaga);
  return finalCreateStore;
}
export default configureStore;
*/
