import React from 'react'

export default function TodoContent(props) {
    let deleteItem = (id) =>{
        props.del(id);
    }
    let updateState = (e,task) =>{
        props.update(task.id);
        console.log(e.target.value = task.isAccomplished);
    }
    let taskList = props.taskList.map((task,id)=>{
        return (
        <div key={id} style={{display:"flex",justifyContent:"space-between"}}>
            <p style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>{task.taskName}</p>
            <input onClick={(e)=> updateState(e,task)} type="checkbox" checked={task.isAccomplished.toString()} />
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
