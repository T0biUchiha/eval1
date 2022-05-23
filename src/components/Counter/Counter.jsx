import React, { useState } from "react";
import styles from "./counter.module.css";
import Task from "../Task/Task";

const Counter = () => {
  // sample value to be replaced
  let count = 0;
  const [cnt,setCnt] = useState({count});
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={()=>{setCnt(count+1)}}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button"onClick={()=>{setCnt(count+1)}}>-</button>
    </div>
   
  );
};

export default Counter;
