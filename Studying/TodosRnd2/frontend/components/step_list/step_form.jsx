import React from "react";

class StepForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      step: {
        id: new Date().getTime(),
        done: false,
        title: '',
        body: ''
      },
      show: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleCloseClick = this.handleCloseClick.bind(this)
    this.handleShowAdd = this.handleShowAdd.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.receiveStep(this.state.step)
    let step = {
      id: new Date().getTime(),
      done: false,
      title: '',
      body: ''
    }
    let show = false;
    this.setState({step, show})

  }

  handleChange(e) {
    const input = {}
    let step = Object.assign({}, this.state.step)
    step[e.target.id] = e.target.value
    this.setState({step})
  }

  handleCloseClick(e) {
    e.preventDefault()
    let show = false;
    this.setState({show})
  }

  handleShowAdd(e) {
    e.preventDefault()
    let show = true;
    this.setState({show})
  }

  showForm() {
    return (
      <div>
        <div className='overlay'></div>
        <form className='todoFormModal' onSubmit={this.handleSubmit}>
          <h1>Add Step</h1>
          <span
            className='close-btn'
            onClick={this.handleCloseClick}
          >&times;</span>
          <label htmlFor="title"></label>
          <input
            className='todoFormInput'
            id="title"
            type="text"
            value={this.state.step.title}
            onChange={this.handleChange}
          />
          <label htmlFor="body"></label>
          <input
            className='todoFormInput'
            id="body"
            type="text"
            value={this.state.step.body}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="Add Step"
            className="addTodoBtn"
          />
        </form>
      </div>
    )
  }

  showAddStep() {
    return (
      <button 
        className='addTodoBtn'
        onClick={this.handleShowAdd}
      >Add Step</button>
    )
  }

  render() {
    if (this.state.show) {
      return this.showForm()
    } else {
      return this.showAddStep()
    }
  }
}

export default StepForm;
