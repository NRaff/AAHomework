import { connect } from "react-redux";
import { removeTodo, deleteTodo } from "../../actions/todo_actions";
import TodoDetailView from "./todo_detail_view";

export const mapDispatchToProps = (dispatch) => ({
  removeTodo: todo => dispatch(removeTodo(todo)),
  receiveSteps: steps => dispatch(receiveSteps(steps)),
  deleteTodo: todo => dispatch(deleteTodo(todo))
})

export default connect(null, mapDispatchToProps)(TodoDetailView)