import React from "react";
import TodoItem from "./todo_item";
import TodoForm from "./todo_form";

const TodoList = (props) => (
  <div className='todoContainer'>
    {props.todos.map((todo) => {
      return (
        <TodoItem todo={todo} key={todo.id} />
      )
    })}
  </div>
  
)

export default TodoList;