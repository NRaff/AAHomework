import React from "react";
import StepListContainer from "../step_list/step_list_container"

const TodoDetailView = (props) => (
  <div>
    <h3>{props.todo.body}</h3>
    <button 
      onClick={() => props.removeTodo(props.todo)}
      className='addTodoBtn'
    >❌ Delete</button>
    <div className='stepList'>
      <StepListContainer todo={props.todo}/>
    </div>
  </div>
)

export default TodoDetailView;