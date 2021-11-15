import * as APIUtil from '../util/todo_api_util'
import { receiveErrors } from './error_actions';

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos,
})

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo,
})

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo,
})

export const fetchTodos = () => (dispatch) => {
  let allTodos;

  return APIUtil.fetchTodos().then((res) => {
    allTodos = res;
    dispatch(receiveTodos(allTodos))
  })
}

export const createTodo = (todo) => (dispatch) => {
  return APIUtil.createTodo(todo)
    .then(
      (todo) => {dispatch(receiveTodo(todo))},
      (err) => {dispatch(receiveErrors(err.responseJSON))}
    )
}

export const updateTodo = (todo) => (dispatch) => {
  return APIUtil.updateTodo(todo)
    .then(
      (todo) => {dispatch(receiveTodo(todo))},
      (err) => {dispatch(receiveErrors(err.responseJSON))}
    )
}