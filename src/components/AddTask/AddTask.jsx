import React, { useState } from "react";
import Task from "../Task/Task";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [todo,setTodo] = useState("")
  const [item,setItem] =useState([]);
  const addItem =(e)=>{
    setItem(e.target.value)
  }
  const add=()=>{
    setItem((added)=>{return [...added,todo]});
    setTodo("")
  }
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text"  placeholder="Add Tasks" value={todo} onChange={addItem}/>
      <button data-cy="add-task-button" onClick={add}>+</button>
      <ul>
        {item.map((value,i)=>{
          <Task></Task>
        })}
      </ul>
    </div>
  );
};

export default AddTask;
