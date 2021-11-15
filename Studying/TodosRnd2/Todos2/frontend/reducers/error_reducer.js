import { CLEAR_ERRORS, RECEIVE_ERRORS } from "../actions/error_actions"

const error_reducer = (state={}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ERRORS:
      // debugger
      return action.errors
    case CLEAR_ERRORS:
      return {}
    default:
      return {}
  }
}

export default error_reducer;