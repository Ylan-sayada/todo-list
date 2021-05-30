import React,{useState} from 'react'
import TodoInput from './TodoInput';
import TodoContent from './TodoContent';
export default function TodoContainer() {
    let [items,setItem] = useState([]);
    let addItem = (item) =>{

    }
    return (
        <div>
       <TodoInput onClickHandler={addItem}/>
       <TodoContent task={items}/>
        </div>
    )
}
