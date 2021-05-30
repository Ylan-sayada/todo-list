import React,{useRef} from 'react'

export default function TodoInput(props) {
    let input  = useRef(null)
    return (
        <div>
            <input ref={input} type="text" placeholder="submit a task" />
            <button onClick={props.onClickHandler(input)}>Add task</button>
        </div>
    )
}
