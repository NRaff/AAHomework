import React from "react";
import TodoItem from "./todo_item";

class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.fetchTodos();
  }

  render(){
    return (
      <div className='todoContainer'>
        {this.props.todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              receiveTodo={this.props.receiveTodo}
              removeTodo={this.props.removeTodo}
              updateTodo={this.props.updateTodo}
            />
          )
        })}
      </div>
    )
  }
}

export default TodoList;