import React, { useState } from "react";
import ToDoItem from "./ToDoItem.jsx";
import InputArea from "./InputArea.jsx";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    if (inputText === "") return;
    setItems(prevItems => {
      return [
        ...prevItems, 
        {
          text: inputText,
          editionDate: new Date()
        }
      ];
    });
  }

  function updateItem(idx, newText) {
    setItems(prevItems => {
      return prevItems.map((item, index) => {
        if (index !== idx) return item;
        else return {
          text: newText,
          editionDate: new Date()
        }
      })
    })
  }

  function deleteItem(idx) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== idx;
      })
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea 
        addItem={addItem}
      />
      <div>
        <ul> 
            {items.map((toDoItem, index) => (
                <ToDoItem 
                  key={index}
                  idx={index}
                  note={toDoItem} 
                  onDelete={deleteItem}
                  onEdit={updateItem}
                />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
