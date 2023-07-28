import React, { useState, useEffect } from "react";
import Tasklist from "./tasklist";
import Form from "./form";


function App() {
  
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    fetch("https://tasks-5ztz.onrender.com/tasks")
    .then(resp=>resp.json())
    .then((data)=>setTasks(data))
  },[])
 

  function addTask(newTask) {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <div className="bg-blue-100 text-green-700  mt-12 w-full ">
      <header className="font-bold uppercase mb-4 text-2xl flex justify-center">
        My Tasks
      </header>
     <div className="bg-blue-400">
     <Form addTask={addTask} />
      <Tasklist tasks={tasks} deleteTask={deleteTask} />
     </div>
    </div>
  );
}

export default App;
