import React,{useRef} from 'react'

export default function TodoInput(props) {
    let input  = useRef(null);
    let onClickHandler = () =>{
        props.addItemHandler(input.current.value);
    }
    let resetHandler = () =>{
        props.resetHandler();
    }
    return (
        <div>
            <input ref={input} type="text" placeholder="submit a task" />
            <button onClick={onClickHandler}>Add task</button>
            <button onClick={resetHandler}>Reset</button>
        </div>
    )
}
