import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"

import rootReducer from "../reducers"
import rootSaga from "../sagas"

// Returns the store instance
// It can  also take initialState argument when provided
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(
      rootReducer,
      // Initialize Redux Dev Tools
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
      // Apply Saga middleware
      applyMiddleware(sagaMiddleware)
    ),
    runSaga: sagaMiddleware.run(rootSaga)
  }
}

export default configureStore
