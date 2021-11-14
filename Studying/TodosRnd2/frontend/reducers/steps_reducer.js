import { RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP } from "../actions/step_actions";

const steps_reducer = (state={}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({},state)
  switch (action.type) {
    case RECEIVE_STEP:
      nextState[action.step.id] = step;
      return nextState;
    case RECEIVE_STEPS:
      let allSteps = getStepsObject(action.steps);
      nextState = allSteps;
      return nextState;
    case REMOVE_STEP:
      delete nextState[action.step.id];
      return nextState;
    default:
      return state
  }
}

const getStepsObject = (steps) => {
  let stepsObj = {}
  steps.forEach((step) => {
    stepsObj[step.id] = step
  })
  return stepsObj
}

export default steps_reducer