import React,{useReducer} from 'react'
import TodoInput from './TodoInput';
import TodoContent from './TodoContent';

function reducer(state, action) {
    switch (action.type) {
      case 'add':
        return [...state,{
            id:state.length,
            taskName: action.payload,
            isAccomplished:false,
        }];
      case 'update':
        let newState = state.map((task)=>{
            let {isAccomplished} = task;
            isAccomplished= !isAccomplished;
            if(action.payload === task.id){
                task.isAccomplished = isAccomplished;
                
            }
            
            console.log(task,isAccomplished);
            return task
        })
        return [...newState];
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
    let addItem = (task) =>{
         dispatchTask({type:'add',payload:task})
    }
    let deleteItem = (id) =>{
        dispatchTask({type:'delete',payload:id})
    }
    let reset= () =>{
        dispatchTask({type:'reset'});
    }
    let updateState = (id) =>{
        dispatchTask({type:'update',payload:{id:id,}})
    }
    return (
        <div>
        <p>{tasks.filter(el => !el.isAccomplished).length} task/s to accomplish</p>
       <TodoInput resetHandler={reset} addItemHandler={addItem}/>
       <TodoContent update={updateState} del={deleteItem} taskList={tasks}/>
        </div>
    )
}
