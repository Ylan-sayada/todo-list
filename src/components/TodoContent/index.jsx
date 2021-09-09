import React from 'react';
import "./TodoContent.scss";
import Task from '../Task';

export default function TodoContent(props) {
    let deleteItem = (task) => {
        props.del(task.id);
    }
    let updateTaskState = (task) => {
        props.updateTaskState(task.id);
    }
    let updateTaskContent = (task) => {
        props.updateTaskContent(task)
    }

    props.taskList.sort((taskA, taskB) => {
        let res;
        switch (props.displayMethod.sortBy) {
            case "oldest":
                res = taskA.publicationDate - taskB.publicationDate;
                break;
            case "importance":
                res = taskB.importance - taskA.importance;
                break;
            default: //sort by latest by default
                res = taskB.publicationDate - taskA.publicationDate;
                break

        }
        return res;
    })

    let taskList = props.taskList.filter((task) => task.taskName.includes(props.displayMethod.search)).map((task, id) => {

        return (
            <Task key={id} task={task} deleteItem={deleteItem} updateContent={updateTaskContent} updateState={updateTaskState} />
        )
    })


    return (
        <div className="todo-content">
            {taskList}
        </div>
    )
}
