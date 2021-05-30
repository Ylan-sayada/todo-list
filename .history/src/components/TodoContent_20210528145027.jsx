import React from 'react'

export default function TodoContent(props) {
    let taskList = props.taskList.map((task,id)=>{
        return (
        <div key={id} style={{display:"flex",justifyContent:"space-between"}}>
            <p style={{display:"flex",justifyContent:"space-between"}}>{task.taskName}<input type="checkbox"/></p>
        </div>
        )
    })
    return (
        <div>
        {taskList}
        </div>
    )
}
