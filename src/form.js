import React ,{useState,}from "react";
function Form({addTask}){
    const[task,setTask]=useState("")
    const newTask={
        task:task
    }
    function handleSubmit(e){
         e.preventDefault();
         
            fetch("https://tasks-5ztz.onrender.com/",{
                method:"POST",
                headers:{'Content-Type': "application/json"},
                body:JSON.stringify(newTask)
            })
            .then(resp=>resp.json())
            .then(data=>{
                addTask(data)
                setTask("")
            })
     }
         
    
    function handleChange(e){
        setTask(e.target.value)
    }

return(
    <form onSubmit={handleSubmit} className="mt-5 pt-5">
        <input type="text" value={task} onChange={handleChange} placeholder="Enter Task"className="ml-6 border border-black rounded-lg text-blue-600"/>
        <button className="ml-4 border border-red-100 bg-red-300 hover:bg-green-400 rounded-lg">Submit</button>
    </form>
)
}

export default Form