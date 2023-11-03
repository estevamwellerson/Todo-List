import { createTodoModel, toggleTodoComplete } from './todo-models';
import { todoStorage } from './todo-storage';

export const TodosHelpers = {
  TodoStorage: todoStorage,
  createTodo: createTodoModel,
  toggleStatus: toggleTodoComplete,
}
