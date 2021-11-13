import { combineReducers } from "redux"
import todosReducer from "./todos_reducer"

const root_reducer = combineReducers({
  todos: todosReducer
})

export default root_reducer;