import React from "react";

function Task({taske,deleteTask}){
    const {id,task}=taske
    function handleDlete(){
        fetch(` http://localhost:3000/tasks/${id}`,{
            method:"DELETE"
        })
        deleteTask(id)
    }
    return(
        <>  <li className="m-6 bg-blue-300 p-4 flex flex-row justify-between ">
        {task}
        <button onClick={handleDlete} className=" text-red-400 border border-red-300 bg-white hover:bg-red-400 hover:text-white  ">Remove</button>
    </li>
    </>
          
    
    )
}

export default Task