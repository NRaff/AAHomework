import React from "react";

const TodoDetailView = (props) => (
  <div>
    <h3>{props.todo.body}</h3>
    <button onClick={() => props.removeTodo(props.todo)}>❌ Delete</button>
  </div>
)

export default TodoDetailView;