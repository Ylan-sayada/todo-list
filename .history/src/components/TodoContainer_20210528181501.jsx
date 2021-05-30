import React,{useReducer} from 'react'
import TodoInput from './TodoInput';
import TodoContent from './TodoContent';
let idGenerator = 0
function reducer(state, action) {
    switch (action.type) {
      case 'add':
        return [...state,{
            id:idGenerator++,
            taskName: action.payload,
            isAccomplished:false,
        }];
      case 'update':
         let {id,taskName,isAccomplished} = state.filter(task => task.id === action.payload)[0];
         state = state.map((task)=>{
            return task.id === action.payload ? {id,taskName,isAccomplished:!isAccomplished} : task;
         })
        return [...state]
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
        if(tasks.length < 5)
         dispatchTask({type:'add',payload:task})
    }
    let deleteItem = (id) =>{
        dispatchTask({type:'delete',payload:id})
    }
    let reset= () =>{
        dispatchTask({type:'reset'});
    }
    let updateState = (id) =>{
        dispatchTask({type:'update',payload:id})
    }
    return (
        <div>
        {tasks.length>0&&<p>{tasks.filter(el => !el.isAccomplished).length} task/s to accomplish</p>}
        {tasks.length===5&& <p>Could not add more task!</p>}
       <TodoInput activeReset={tasks.length > 0 ? false : true } resetHandler={reset} addItemHandler={addItem}/>
       <TodoContent update={updateState} del={deleteItem} taskList={tasks}/>
        </div>
    )
}
