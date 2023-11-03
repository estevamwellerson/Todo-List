import { useState } from "react";
import { TodoForm, TodoList } from "./components";

const Home = () => {
  const initialItems = JSON.parse(localStorage.getItem("items")) || [];
  const [newTodoText, setNewTodoText] = useState("");
  const [items, setItems] = useState(initialItems);

  function addItem() {
    if (!newTodoText) {
      alert("adicione uma tarefa!");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newTodoText,
    };
    const saveItem = [...items, item];
    setItems(saveItem);
    localStorage.setItem("items", JSON.stringify(saveItem));
    setNewTodoText("");
  }

  function deleteItem(id) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  }

  function toggleComplete(id){
    const updatedItems = items.map((item) =>
    item.id === id ? {...item, complete: !item.complete} : item);
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems))
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
