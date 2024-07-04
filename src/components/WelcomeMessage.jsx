import { useContext } from 'react';
import { TodoItemsContext } from "../store/todo-items-store";
import React from 'react';
import styles from './WelcomeMessage.module.css';

function WelcomeMessage () {

  const {todoItems} = useContext(TodoItemsContext);

  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy Your Day</p>
  );
};

export default WelcomeMessage;