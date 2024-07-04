import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";


function App() {

const [todoItems, setTodoItems] = useState([]);

const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [...currValue, {dueName: itemName, dueDate: itemDueDate}]);
};

const deleteItem = (todoItemName) => {
  const newTodoItems = todoItems.filter((item) => item.dueName !== todoItemName);
  setTodoItems(newTodoItems);
}

  return (
    <TodoItemsContext.Provider
     value={{
      todoItems:todoItems,
      addNewItem:addNewItem,
      deleteItem:deleteItem
     }}>

      <center className ="todo-container">
        <AppName />
        <div className="items-container">
          <AddTodo />
        </div>
        <WelcomeMessage />
        <TodoItems />
      </center>
      
    </TodoItemsContext.Provider>
  );
};

export default App;