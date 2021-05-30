import React from 'react'

export default function TodoInput(props) {
    return (
        <div>
            <input type="text" placeholder="submit a task" />
            <button onClick={props.OnclickHandler}>Add task</button>
        </div>
    )
}
