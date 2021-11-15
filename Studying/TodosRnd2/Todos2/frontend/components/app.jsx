import React from "react";
import TodoFormContainer from "./todos/todo_form_container";
import TodoListContainer from './todos/todo_list_container'

const App = (props) => (
  <div className='all'>
    <TodoFormContainer />
    <TodoListContainer />
  </div>
)

export default App;