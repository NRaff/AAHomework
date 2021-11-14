import { connect } from "react-redux";
import { allSteps, stepsByTodoId } from "../../reducers/selectors";
import StepList from "./step_list";


export const mapStateToProps = (state, props) => ({
  steps: stepsByTodoId(state, props.todo.id),
  todo_id: props.todo.id
})

export const mapDispatchToProps = (dispatch) => ({
  receiveStep: step => dispatch(receiveStep(step))
})

export default connect(mapStateToProps, mapDispatchToProps)(StepList)