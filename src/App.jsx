import { useState } from "react";

export default function App() {
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
    <div className="app">
      <h1>TODO - LIST 📔</h1>

      <div className="input-area">
        <input
          type="text"
          placeholder="Qual o planejamento de hoje?"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />

        <button className="btn-add" type="submit" onClick={(e) => addItem()}>
          Add
        </button>
      </div>

      {/* 3.List of item */}

      <ul>
        {items.map((item) => {
          return (
            <div className="list">
              <li key={item.id}>                         
                  
                <button className="btn-complete" onClick={(e) => toggleComplete(item.id)}>✅</button>

                <span style={{textDecoration: item.complete ? 'line-through' : 'none'}}>
                  {item.value}
                </span>

                <button className="btn-clear" onClick={(e) => deleteItem(item.id)} >🗑️</button>

              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
