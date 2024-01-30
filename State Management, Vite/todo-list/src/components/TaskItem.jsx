import React from "react";
function TaskItem(props) {
  const {task,completed}=props.item;

  function handleDelete(){
    props.onDelete(props.item);
  }
  function handleToggle () {
    props.onToggle(props.item);
  };
    return (
      <><div style={{color:completed?"green":"red"}}>Task Item
      <span>{task}</span>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleToggle}>Toggle</button>
      </div></>
    
    )
  }
  
  export default TaskItem;
  