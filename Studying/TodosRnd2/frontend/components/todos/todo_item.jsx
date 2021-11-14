import React from "react";

const TodoItem = ({todo}) => (
  <div className='todoItem'>
    <h3>{todo.title}</h3>
    <button>{todo.done ? '✅ Done' : '🟡 Complete?'}</button>
  </div>
)

export default TodoItem;