import { connect } from "react-redux";
import { removeTodo } from "../../actions/todo_actions";
import TodoDetailView from "./todo_detail_view";

export const mapDispatchToProps = (dispatch) => ({
  removeTodo: todo => dispatch(removeTodo(todo)),
  receiveSteps: steps => dispatch(receiveSteps(steps))
})

export default connect(null, mapDispatchToProps)(TodoDetailView)