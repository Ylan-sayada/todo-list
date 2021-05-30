import React from 'react'

export default function TodoContent(props) {
    let deleteItem = (id) =>{
        props.del(id);
    }
    let taskList = props.taskList.map((task,id)=>{
        return (
        <div key={id} style={{display:"flex",justifyContent:"space-between"}}>
            <p style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>{task.taskName}<input type="checkbox"/><button onClick={()=>deleteItem(task.id)}>X</button></p>
        </div>
        )
    })
    return (
        <div>
        {taskList}
        </div>
    )
}
