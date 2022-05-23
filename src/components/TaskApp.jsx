import React, { useState } from "react";

import Tasks from "./Tasks/Tasks";
import styles from "./taskApp.module.css";


const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [todo,setTodo] =useState("");
  const [item,setItem] = useState([]);
  const addItem=(e)=>{
    setTodo(e.taget.value)
  }
  const remove =(id)=>{
    setItem((added)=>{
      return added.filter((ele,index)=>{
        return index !== id;
      })
    })
  }
  const add=()=>{
    setItem((added)=>{
      return[...added,todo]
    });
    setTodo("")
  }
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      
      <input type="text" placeholder="Add Tasks" value={todo} onChange={addItem}/>
      <button onClick={add}>+</button>
      <ul>
        {item.map((value,i)=>{
          return (<Tasks key={i} id={i} text={value} onSelect={remove}></Tasks>)
        })}
      </ul>
      {/* Add Task */}
      
      {/* Tasks */}
      
    </div>
  );
};

export default TaskApp;
