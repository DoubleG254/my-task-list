import React from "react";
import Task from "./task";

function Tasklist({tasks,deleteTask}){
    return(
          <div>
            {tasks.map((data)=>(
                <Task key= {data.id}taske={data} deleteTask={deleteTask}/>
            ))}
          </div>
    )
}

export default Tasklist