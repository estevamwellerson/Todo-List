const todoStorageNamme = 'items';

const setItem = (todos) => {
  localStorage.setItem(todoStorageNamme, JSON.stringify(todos));
}

const getItem = () => {
  return JSON.parse(localStorage.getItem(todoStorageNamme)) || []
}

export const todoStorage = {
  setItem,
  getItem,
}
