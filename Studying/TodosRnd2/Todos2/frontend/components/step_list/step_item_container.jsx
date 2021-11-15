import { connect } from "react-redux";
import { removeStep } from "../../actions/step_actions";
import StepItem from "./step_item";

export const mapDispatchToProps = (dispatch) => ({
  removeStep: step => dispatch(removeStep(step)),
  receiveStep: step => dispatch(receiveStep(step))
})

export default connect(null, mapDispatchToProps)(StepItem)