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
          state = state.filter(task => action.payload !== task.id).map(el => el)
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
    let addItem = (task) =>{
         dispatchTask({type:'add',payload:task})
    }
    let deleteItem = (id) =>{
        dispatchTask({type:'delete',payload:id})
    }
    let reset= () =>{
        dispatchTask({type:'reset'});
    }

    console.log(tasks);
    return (
        <div>
        <p>{tasks.filter(el => !el.isAccomplished).length} to accomplishe!</p>
       <TodoInput resetHandler={reset} addItemHandler={addItem}/>
       <TodoContent del={deleteItem} taskList={tasks}/>
        </div>
    )
}
