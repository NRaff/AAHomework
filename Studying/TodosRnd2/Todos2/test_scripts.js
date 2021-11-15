

const newTodos = [
  { id: 4, title: "New Todo" },
  { id: 5, title: "New Thing" },
  { id: 6, title: "Todo Todo" }
]

const newSteps = [
  { id: 1, title: 'Learn Redux', done: false, todo_id: 4 },
  { id: 2, title: 'asdf', done: false, todo_id: 4 },
  { id: 3, title: 'somethign else', done: false, todo_id: 5 },
];

store.dispatch(receiveTodos(newTodos));
store.dispatch(receiveSteps(newSteps));

store.dispatch(removeTodo({ id: 4, title: "New Todo" }));
store.dispatch(removeStep({ id: 3, title: "Newer Step" }));

export const testFunc = () => {
  console.log('test func')
}