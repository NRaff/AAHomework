import { connect } from "react-redux";
import { receiveTodo, createTodo } from "../../actions/todo_actions";
import { showAddTodo } from "../../actions/ui_actions";
import TodoForm from "./todo_form";

const mapStateToProps = (state) => ({
  showModal: state.ui.showAddTodo
})

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  showAddTodo: show => dispatch(showAddTodo(show)),
  createTodo: todo => dispatch(createTodo(todo))
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoForm)