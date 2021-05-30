import React,{useReducer,useState} from 'react'
import TodoInput from './TodoInput';
import TodoContent from './TodoContent';

function reducer(state, action) {
    switch (action.type) {
      case 'add':
        return [...state,{
            id:state.length,
            taskName: action.payload,
        }];
      case 'delete':
          state = state.filter(task => action.payload !== task.id).map(task => task)
         return [...state];
      case 'reset':
          return [];
      default:
        throw new Error();
    }
  }

  let initReducer = [];

export default function TodoContainer() {
    let [tasks,dispatchTask] = useReducer(reducer,initReducer);
    let [accomplished,setAccomplished] = useState(tasks.length);
    let addItem = (task) =>{
         dispatchTask({type:'add',payload:task})
    }
    let deleteItem = (id) =>{
        dispatchTask({type:'delete',payload:id})
    }
    let reset= () =>{
        dispatchTask({type:'reset'});
    }
    let numOfTaskAccomplished = (id) =>{
        
    }
    return (
        <div>
        <p>{tasks.length} task/s to accomplish</p>
       <TodoInput resetHandler={reset} addItemHandler={addItem}/>
       <TodoContent update={updateState} del={deleteItem} taskList={tasks}/>
        </div>
    )
}
