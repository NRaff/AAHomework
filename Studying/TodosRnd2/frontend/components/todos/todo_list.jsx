import React from "react";
import TodoItem from "./todo_item";

const TodoList = (props) => (
  <div className='todoContainer'>
    {props.todos.map((todo) => {
      return (
        <TodoItem 
          todo={todo} 
          key={todo.id} 
          receiveTodo={props.receiveTodo}
          removeTodo={props.removeTodo}
        />
      )
    })}
  </div>
  
)

export default TodoList;