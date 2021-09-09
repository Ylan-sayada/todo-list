import React, { useReducer, useState, useEffect } from 'react'
import TodoInput from '../TodoInput';
import TodoContent from '../TodoContent';
import SearchAndSort from '../SearchAndSort';
import "./TodoContainer.scss";
import Empty from '../../Jsx_Svg/Empty';

function reducer(state, action) {

    switch (action.type) {
        case 'add':
            return [...state, {
                id: idGenerator++,
                taskName: action.payload.value,
                importance: parseInt(action.payload.importance),
                isAccomplished: false,
                publicationDate: new Date(),
                editTime: false
            }];
        case 'updateTaskState':
            let { isAccomplished } = state.filter(task => task.id === action.payload)[0];
            state = state.map((task) => {

                return task.id === action.payload ? { ...task, isAccomplished: !isAccomplished } : task;
            })
            return [...state]
        case 'updateTaskContent':
            state = state.map((task) => {
                return task.id === action.payload.id ? { ...task, taskName: action.payload.taskName, importance: action.payload.importance, editTime: new Date() } : task;
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
let idGenerator = 0;
let initReducer = [];
if (localStorage.getItem('list') && localStorage.getItem('list') !== "[]") {
    initReducer = JSON.parse(localStorage.getItem('list'));
    initReducer.forEach(task => {
        task.publicationDate = new Date(task.publicationDate);
    });
    idGenerator = [...initReducer].sort((taskA, taskB) => taskB.id - taskA.id)[0].id + 1;
}

export default function TodoContainer() {
    const [tasks, dispatchTask] = useReducer(reducer, initReducer);
    const [sortBy, setSortBy] = useState("Latest");
    const [search, setSearch] = useState("");

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(tasks));
    }, [tasks])
    let addItem = (task) => {
        dispatchTask({ type: 'add', payload: task });
    }
    let deleteItem = (id) => {
        dispatchTask({ type: 'delete', payload: id });
    }
    let reset = () => {
        dispatchTask({ type: 'reset' });
    }
    let updateTaskState = (id) => {
        dispatchTask({ type: 'updateTaskState', payload: id })
    }
    let updateTaskContent = (task) => {
        dispatchTask({ type: 'updateTaskContent', payload: task })

    }
    let sortByMethod = (sortByMethod) => {
        setSortBy(sortByMethod);
    }
    let searchTask = (task) => {
        setSearch(task)
    }

    return (
        <div className="todo-container">
            <div className="todo-header">
                <h1>Todo List </h1>
                <h6>Developed in React with  &#128149;  by <a href="https://www.linkedin.com/in/ylan-sayada-1363311b8/" rel="noreferrer" target="_blank">@Ylan_Sayada</a></h6>
                <TodoInput activeReset={tasks.length > 0 ? false : true} resetHandler={reset} addItemHandler={addItem} />
            </div>
            <SearchAndSort sortBy={sortByMethod} search={searchTask} />
            <div className="count-task-section">
                {tasks.length > 0 ?
                    <p >{tasks.filter(el => el.isAccomplished === false).length} task{tasks.length > 1 ? "s" : ""} to accomplish</p>
                    :
                    <React.Fragment><p>No Task</p><Empty className="svgIcon" /></React.Fragment>

                }
            </div>
            <TodoContent updateTaskState={updateTaskState} updateTaskContent={updateTaskContent} del={deleteItem} displayMethod={{ sortBy, search }} taskList={tasks} />

        </div>
    )
}
