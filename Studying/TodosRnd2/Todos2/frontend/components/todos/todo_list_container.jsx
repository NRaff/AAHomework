
import { connect } from "react-redux";
import { receiveTodos, receiveTodo, removeTodo, fetchTodos, createTodo, updateTodo } from "../../actions/todo_actions";
import { allTodos } from "../../reducers/selectors";
import TodoList from "./todo_list";

const mapStateToProps = (state) => ({
  todos: allTodos(state)
})

const mapDispatchToProps = (dispatch) => ({
  receiveTodos: todos => dispatch(receiveTodos(todos)),
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: todo => dispatch(createTodo(todo)),
  updateTodo: todo => dispatch(updateTodo(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)