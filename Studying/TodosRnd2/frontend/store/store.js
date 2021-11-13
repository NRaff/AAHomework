import { applyMiddleware, createStore } from "redux";
import root_reducer from "../reducers/root_reducer";
import logger from 'redux-logger'

const configureStore = () => {
  return createStore(root_reducer, applyMiddleware(logger))
}

export default configureStore;