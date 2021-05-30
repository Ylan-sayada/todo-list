import React,{useRef,useState} from 'react'

export default function TodoInput(props) {
    let input  = useRef(null);
    let [isClickable,setIsClickable] = useState(true);
    let handleButtonState = (e) =>{
        let btnState  = e.target.value ? false : true;
        setIsClickable(btnState)
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
            {props.activeReset&&<button onClick={resetHandler}>Reset</button>}
        </div>
    )
}
