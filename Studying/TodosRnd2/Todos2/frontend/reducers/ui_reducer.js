import { SHOW_ADD_TODO } from "../actions/ui_actions";

const defaultUIState = {
  showAddTodo: false
}

const ui_reducer = (state=defaultUIState, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch(action.type) {
    case SHOW_ADD_TODO:
      nextState.showAddTodo = action.show
      return nextState;
    default:
      return state
  }
}

export default ui_reducer;