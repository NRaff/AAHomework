import React from 'react'
import ReactDOM from 'react-dom'
import { receiveStep, receiveSteps, removeStep } from './actions/step_actions';
import { createTodo, fetchTodos, receiveTodo, receiveTodos, removeTodo } from './actions/todo_actions';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let root = document.getElementById('root');
  let store = configureStore();
  ReactDOM.render(<Root store={store}/>, root)
  window.store = store
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.receiveTodo = receiveTodo;
  window.removeTodo = removeTodo;
  window.receiveSteps = receiveSteps;
  window.receiveStep = receiveStep;
  window.removeStep = removeStep;
  window.fetchTodos = fetchTodos;
  window.createTodo = createTodo;
  const testFunc = () => {
    console.log('this is a test func')
  }
  window.testFunc = testFunc

})