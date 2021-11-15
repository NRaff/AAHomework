export const thunk = store => next => action => {
  if (typeof action === 'function') {
    console.log('Thunk is working')
    return action(store.dispatch)
  } else {
    return next(action)
  }
}