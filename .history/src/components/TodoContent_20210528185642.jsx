import React from 'react'

export default function TodoContent(props) {
    let deleteItem = (id) =>{
        props.del(id);
    }
    let updateState = (id) =>{
        props.update(id);
    }
    let taskList = props.taskList.map((task,id)=>{
        return (
        <div key={id} style={{display:"flex",justifyContent:"space-between"}}>
            <p style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>{task.taskName}</p>
            <input onClick={()=> updateState(task.id)} type="checkbox" checked={task.isAccomplished}}/>
            <button onClick={()=>deleteItem(task.id)}>X</button>
        </div>
        )
    })
    return (
        <div>
        {taskList}
        </div>
    )
}
