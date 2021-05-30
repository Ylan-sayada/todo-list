import React,{useReducer} from 'react'
import TodoInput from './TodoInput';
import TodoContent from './TodoContent';

function reducer(state, action) {
    switch (action.type) {
      case 'add':
        return [...state,{
            id:state.length,
            taskName: action.payload,
            isAccomplished: false
        }];
      case 'delete':
         return [...state,{
            taskName: action.taskName,
            isAccomplished: false
        }];
      default:
        throw new Error();
    }
  }

  let initReducer = [];

export default function TodoContainer() {
    console.log(tasks);
    let [tasks,dispatchTask] = useReducer(reducer,initReducer);
    let addItem = (task) =>{
        return dispatchTask({type:'add',payload:task})
    }
    return (
        <div>
       <TodoInput onClickHandler={addItem}/>
       <TodoContent task={tasks}/>
        </div>
    )
}
