import React from 'react'

export default function TodoInput(props) {
    return (
        <div>
            <input type="text" placeholder="submit a task" onClick={props.OnclickHandler}/>
            <button>Add task</button>
        </div>
    )
}
