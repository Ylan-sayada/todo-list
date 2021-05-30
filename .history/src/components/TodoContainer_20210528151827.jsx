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
         return [state.filter(task => action.id != task.id)];
      default:
        throw new Error();
    }
  }

  let initReducer = [];

export default function TodoContainer() {
    let [tasks,dispatchTask] = useReducer(reducer,initReducer);
    let addItem = (task) =>{
         dispatchTask({type:'add',payload:task})
    }
    let deleteItem = (id) =>{
        dispatchTask({type:'delete',payload:id})
   }
    console.log(tasks);
    return (
        <div>
       <TodoInput onClickHandler={addItem}/>
       <TodoContent del={deleteItem} taskList={tasks}/>
        </div>
    )
}
