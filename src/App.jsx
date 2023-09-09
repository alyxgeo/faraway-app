import React, { useState } from "react";
import "./App.css";
import Logo from "./Components/Logo";
import Form from "./Components/Form";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";

/*const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "T shirt", quantity: 5, packed: true },
];*/


const App = () => {

  const [items, setItems] = useState([]);


  //add item
  const handleAddItems = (newItem) => {
    setItems((currentObjs) => [...currentObjs, newItem]);
  };


  //delete item
  const handleDeleteItem = (id) => {
    setItems((currentObjs) =>
      currentObjs.filter((item) => item.id !== id)
    );
  };


  //update item  
  const handleToggleItem = (id) => {
    setItems((currentObjs) => (
      currentObjs.map((item) => item.id === id ? { ...item, packed: !item.packed } : item)
    ))
  }


  //clear all the list - delete al the items
  const handleClearList =()=>{
    const confirmed = window.confirm('are you sure to clear all items')
    if(confirmed) setItems([])
  }


  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList items={items} handleDeleteItem={handleDeleteItem}
        handleToggleItem={handleToggleItem} handleClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;


