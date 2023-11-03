import { useState } from "react";
import { Button } from "../../shared/components";
import { TodoForm } from "./components";

const Home = () => {
  const initialItems = JSON.parse(localStorage.getItem("items")) || [];
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState(initialItems);

  function addItem() {
    if (!newItem) {
      alert("adicione uma tarefa!");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    const saveItem = [...items, item];
    setItems(saveItem);
    localStorage.setItem("items", JSON.stringify(saveItem));
    setNewItem("");
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

      <TodoForm value={newItem} onTypeTodo={setNewItem} onAddTodo={addItem} />

      <ul>
        {items.map((item) => {
          return (
            <div className="list" key={item.id}>
              <li key={item.id}>
                <Button className="btn-icon" onClick={() => toggleComplete(item.id)}>✅</Button>
                <span style={{textDecoration: item.complete ? 'line-through' : 'none'}}>
                  {item.value}
                </span>
                <Button className="btn-icon" onClick={() => deleteItem(item.id)} >🗑️</Button>
              </li>
            </div>
          );
        })}
      </ul>
    </>
  )
}

export default Home;
