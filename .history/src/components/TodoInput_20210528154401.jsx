import React,{useRef,useState} from 'react'

export default function TodoInput(props) {
    let input  = useRef(null);
    let [isClickable,setIsClickable] = useState(true);
    let handleButtonState = (e) =>{
        console.log(e);
    }
    let onClickHandler = () =>{
        props.addItemHandler(input.current.value);
    }
    let resetHandler = () =>{
        props.resetHandler();
    }
    return (
        <div>
            <input ref={input} onChange={handleButtonState} type="text" placeholder="submit a task" />
            <button disabled={isClickable} onClick={onClickHandler}>Add task</button>
            <button onClick={resetHandler}>Reset</button>
        </div>
    )
}
