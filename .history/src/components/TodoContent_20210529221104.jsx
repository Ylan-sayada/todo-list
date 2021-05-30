import React from 'react'

export default function TodoContent(props) {
    
    let deleteItem = (task) =>{
        props.del(task.id);
    }
    let updateState = (task) =>{
        props.update(task.id);
    }
    let taskList = props.taskList.map((task,id)=>{
        return (
        <div key={id} style={{display:"flex",justifyContent:"space-evenly"}}>
            <p style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>{task.taskName}</p>
            <input onChange={()=> updateState(task)} checked={task.isAccomplished} type="checkbox"/>
            <button onClick={()=>deleteItem(task)}>X</button>
        </div>
        )
    })
    return (
        <div>
        {taskList}
        </div>
    )
}
