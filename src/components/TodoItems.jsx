import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";

const TodoItems = () => {

  const {todoItems} = useContext(TodoItemsContext);

  return(
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem 
          todoName={item.dueName} 
          todoDate ={item.dueDate} 
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;