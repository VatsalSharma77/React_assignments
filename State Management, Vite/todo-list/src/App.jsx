import React, { useState } from "react";
// import "./App.css";
import TaskItem from "./components/TaskItem.jsx";

function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "", // string
    completed: false, // boolean
    taskAssignedTo: "", // string
  });

  function handleChange(event) {
    // Implement logic to handle form changes
    const {name,value,type,checked}=event.target;
    setFormState((prevFormState)=>({
      ...prevFormState,
      [name]:type==="checkbox"? checked:value,
    }))
    // console.log(formState);
    
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Implement logic to handle form submission
    if(formState.task.trim()){

      setTasks((prevTasks)=>[...prevTasks,{...formState}]);

      setFormState({
        task:"",
        completed:false,
        taskAssignedTo:"",
      })
    }
    
  }

  function handleDelete  (taskToDelete)  {
    setTasks((prevTasks) => prevTasks.filter((task) => task !== taskToDelete));
  };

  function handleToggle  (taskToToggle) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task === taskToToggle ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input name="task" type="text" placeholder="Add Task" />
          <label>
            Completed:
            <input name="completed" type="checkbox" />
          </label>
          <select name="taskAssignedTo">
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <hr />
      {tasks.map((item, index ,) => (
        <TaskItem key={index} item={item}  />
      ))}
    </>
  );
}

export default App;
