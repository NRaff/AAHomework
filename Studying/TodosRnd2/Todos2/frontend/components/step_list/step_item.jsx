import React from "react"

class StepItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = Object.assign({}, this.props.step)
    this.handleDelete = this.handleDelete.bind(this)
    this.toggleComplete = this.toggleComplete.bind(this)
  }

  handleDelete() {
    this.props.removeStep(this.state)
  }

  toggleComplete() {
    let done = this.state.done ? false : true;
    this.setState({ done }, () => this.props.receiveStep(this.state))
  }


  render() {
    return (
      <div>
        <h3>{this.props.step.title}</h3>
        <p>{this.props.step.body}</p>
        <button
          onClick={this.toggleComplete}
          className='addTodoBtn'
        >{this.state.done ? '✅ Done' : '🟡 Complete?'}</button>
        <button
          onClick={this.handleDelete}
          className='addTodoBtn'
        >❌ Delete</button>
      </div>
    )
  }
}
  

export default StepItem;