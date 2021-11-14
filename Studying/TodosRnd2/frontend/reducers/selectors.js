export const allTodos = (state) => (
  Object.values(state.todos)
)

export const allSteps = (state) => (
  Object.values(state.steps)
)

export const stepsByTodoId = (state, todoId) => {
  const allSteps = Object.values(state.steps);
  const todoSteps = allSteps.filter(step => step.todo_id === todoId);
  return todoSteps;
}
  