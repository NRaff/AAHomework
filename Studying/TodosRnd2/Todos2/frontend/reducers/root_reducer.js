import { combineReducers } from "redux"
import error_reducer from "./error_reducer";
import steps_reducer from "./steps_reducer";
import todosReducer from "./todos_reducer"
import ui_reducer from "./ui_reducer";

const root_reducer = combineReducers({
  todos: todosReducer,
  steps: steps_reducer,
  ui: ui_reducer,
  errors: error_reducer
})

export default root_reducer;