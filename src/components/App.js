import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const storage = localStorage.getItem("items");
  const [items, setItems] = useState(storage ? JSON.parse(storage) : []);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
    localStorage.removeItem("items");
    localStorage.setItem("items", JSON.stringify([...items, item]));
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
    localStorage.removeItem("items");
    localStorage.setItem(
      "items",
      JSON.stringify(items.filter((item) => item.id !== id))
    );
  }

  function handleClearItems() {
    const confirm = window.confirm("Do you want to clear the list?");
    if (confirm) {
      setItems([]);
    }
    localStorage.removeItem("items");
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
    localStorage.removeItem("items");
    localStorage.setItem(
      "items",
      JSON.stringify(
        items.map((item) =>
          item.id === id ? { ...item, packed: !item.packed } : item
        )
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}
