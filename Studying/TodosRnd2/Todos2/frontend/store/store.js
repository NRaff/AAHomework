import { applyMiddleware, createStore } from "redux";
import root_reducer from "../reducers/root_reducer";
import logger from 'redux-logger'
import { thunk } from "../middleware/thunk";

const configureStore = () => {
  return createStore(root_reducer, applyMiddleware(thunk, logger))
}

export default configureStore;