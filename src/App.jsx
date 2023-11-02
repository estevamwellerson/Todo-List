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

        <button type="submit" onClick={(e) => addItem()}>
          Add
        </button>
      </div>

      {/* 3.List of item */}

      <ul>
        {items.map((item) => {
          return (
            <div className="list">
              <li key={item.id}>
                {item.value}

                <button
                  className="btn-clear"
                  onClick={(e) => deleteItem(item.id)}
                >
                  🗑️
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
