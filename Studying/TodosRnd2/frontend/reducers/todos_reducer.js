import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from "../actions/todo_actions";

const todosReducer = (state={}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({},state)
  switch (action.type) {
    case RECEIVE_TODOS:
      let todos = getTodosObject(action.todos);
      nextState = todos;
      return nextState;
    case RECEIVE_TODO:
      nextState[action.todo.id] = action.todo;
      return nextState;
    case REMOVE_TODO:
      delete nextState[action.todo.id];
      return nextState;
    default:
      return state
  }
}

const getTodosObject = (todos) => {
  let todoObj = {}
  todos.forEach((todo) => {
    todoObj[todo.id] = todo;
  })
  return todoObj;
}

export default todosReducer;