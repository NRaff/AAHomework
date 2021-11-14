import React from "react";
import { receiveTodo } from "../../actions/todo_actions";

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: new Date().getTime(),
      title: '',
      body: '',
      done: false
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleCloseClick = this.handleCloseClick.bind(this)
  }

  handleInput(e) {
    e.preventDefault()
    let input = {}
    input[e.target.id] = e.target.value
    this.setState(input)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.receiveTodo(this.state)
    this.setState({
      id: new Date().getTime(),
      title: '',
      body: '',
      done: false
    })
    this.props.showAddTodo(false)
  }

  handleAddClick(e) {
    this.props.showAddTodo(true)
  }

  handleCloseClick(e) {
    this.props.showAddTodo(false)
  }

  modal() {
    return (
      <div>
        <div className='overlay'></div>
        <form className='todoFormModal' onSubmit={this.handleSubmit}>
          <h1>Add Todo</h1>
          <span 
            className='close-btn'
            onClick={this.handleCloseClick}
          >&times;</span>
          <label htmlFor="title"></label>
          <input
            id='title'
            className='todoFormInput'
            type="text"
            value={this.state.title}
            placeholder='Todo title...'
            onChange={this.handleInput}
          />
          <label htmlFor="body"></label>
          <input
            id='body'
            className='todoFormInput'
            type="text"
            value={this.state.body}
            placeholder='Todo description...'
            onChange={this.handleInput}
          />
          <input
            type="submit"
            value='Add Todo'
            className='todoFormSubmit'
          />
        </form>
      </div>
    )
  }

  addTodoBtn() {
    return (
      <button 
        className='addTodoBtn'
        onClick={this.handleAddClick}
      >Add Todo</button>
    )
  }

  render() {
    if (this.props.showModal) {
      return this.modal()
    } else {
      return this.addTodoBtn()
    }
  }
}

export default TodoForm;