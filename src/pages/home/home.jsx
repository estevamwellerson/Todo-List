import { useState } from "react";
import { TodoForm, TodoList } from "./components";
import { TodosHelpers } from "./helpers";

const Home = () => {
  const initialItems = TodosHelpers.TodoStorage.getItem();
  const [newTodoText, setNewTodoText] = useState("");
  const [items, setItems] = useState(initialItems);

  function addItem() {
    if (!newTodoText) {
      alert("adicione uma tarefa!");
      return;
    }
    const item = TodosHelpers.createTodo({ text: newTodoText });
    const saveItem = [...items, item];
    setItems(saveItem);
    TodosHelpers.TodoStorage.setItem(saveItem);
    setNewTodoText("");
  }

  function deleteItem(id) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    TodosHelpers.TodoStorage.setItem(updatedItems);
  }

  function toggleComplete(id){
    const updatedItems = items.map((item) =>
    item.id === id ? {...item, complete: !item.complete} : item);
    setItems(updatedItems);
    TodosHelpers.TodoStorage.setItem(updatedItems)
  }

  return (
    <>
      <h1>TODO - LIST 📔</h1>
      <TodoForm value={newTodoText} onTypeTodo={setNewTodoText} onAddTodo={addItem} />
      <TodoList items={items} onToggle={toggleComplete} onDelete={deleteItem} />
    </>
  )
}

export default Home;
