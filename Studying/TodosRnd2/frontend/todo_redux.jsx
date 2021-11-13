import React from 'react'
import ReactDOM from 'react-dom'
import { receiveTodo, receiveTodos, removeTodo } from './actions/todo_actions';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  let root = document.getElementById('root');
  ReactDOM.render(<h1>Todos App</h1>, root)
  let store = configureStore();
  window.store = store
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.receiveTodo = receiveTodo;
  window.removeTodo = removeTodo;

})