import React from "react";
import TodoDetailViewContainer from "./todo_detail_view_container";


class TodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: this.props.todo,
      showDetail: false
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.toggleComplete = this.toggleComplete.bind(this)
    this.toggleDetail = this.toggleDetail.bind(this)
  }

  handleDelete(){
    this.props.removeTodo(this.state)
  }

  toggleComplete(){
    let done = this.state.todo.done ? false : true;
    let todo = Object.assign({}, this.state.todo)
    todo.done = done
    this.setState({ todo }, () => this.props.updateTodo(this.state.todo))
  }

  toggleDetail(){
    let showDetail = this.state.showDetail ? false : true;
    this.setState({showDetail})
  }

  todoItem(){
    let detailText = this.state.showDetail ? 'Hide Detail' : 'Show Detail'
    return (
      <div className='todoItem'>
        <h3>{this.props.todo.title}</h3>
        <button 
          onClick={this.toggleComplete}
          className='addTodoBtn'
        >{this.props.todo.done ? '✅ Done' : '🟡 Complete?'}</button>
        <button 
          onClick={this.toggleDetail}
          className='addTodoBtn'
        >{detailText}</button>
      </div>
    )
  }

  render(){
    if (this.state.showDetail) {
      return (
        <div className='todoDetailView'>
          {this.todoItem()}
          <TodoDetailViewContainer todo={this.state.todo} />
        </div>
      )
    } else {
      return this.todoItem()
    }
    // return this.todoItem()
  }
}

export default TodoItem;