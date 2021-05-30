import React from 'react'

export default function TodoContent(props) {
    return (
        <div>
            {props.task?props.tasks.map((task,id)=>{
                <div key={id}>
                    <p>{task.taskName}</p>
                    <input type="radio"/>
                </div>
            }):
            ''}
        </div>
    )
}
