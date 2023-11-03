export const createTodoModel = ({ text }) => {
  return {
    id: Math.floor(Math.random() * 1000),
    value: text,
    complete: false,
  }
}

export const toggleTodoComplete = (todo) => {
  return {
    ...todo,
    complete: !todo.complete,
  }
}
