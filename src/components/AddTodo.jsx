import { useRef } from "react";
import { useContext } from 'react';
import { TodoItemsContext } from "../store/todo-items-store";
import { IoIosAddCircle } from "react-icons/io";

function AddTodo () {

  const {addNewItem} = useContext(TodoItemsContext);
  const todoNameEle = useRef();
  const todoDateEle = useRef();

  const handleAddButton = (event) => {
    event.preventDefault();
    const todoName = todoNameEle.current.value;
    const todoDate = todoDateEle.current.value;
      if (todoName !== "" && todoDate !== "") {
        addNewItem(todoName, todoDate);
        todoNameEle.current.value = '';
        todoDateEle.current.value = '';
      };
  };


    return (
      <div className="container">

        <form className="row kg-row" onSubmit={handleAddButton}>

          <div className="col-6">
            <input type="text"
             ref={todoNameEle} placeholder="Enter Todo Here">
            </input>
          </div>
          <div className="col-4">
            <input type="date"
             ref={todoDateEle}>
            </input>
          </div>
          <div className="col-2">
            <button className="btn btn-success kg-button">
              <IoIosAddCircle />
            </button>
          </div>

        </form>
      
      </div>
    );
}

export default AddTodo;