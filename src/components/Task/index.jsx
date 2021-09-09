import React, { useState, useRef } from 'react';
import Delete from '../../Jsx_Svg/Delete';
import Edit from '../../Jsx_Svg/Edit';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getFullDate, getFullTime } from '../../utils';
import "./Task.scss";
import Info from '../../Jsx_Svg/Info';
import Close from '../../Jsx_Svg/Close';
export default function Task(props) {
    const [edit, setEdit] = useState(false);
    const [infoIsOpen, setInfoIsOpen] = useState(false);
    const editRef = useRef(null);
    let { task } = props;
    let handleEdit = () => {
        setEdit(false);
        props.updateContent({ ...task, taskName: editRef.current.value })
    }
    return (
        <div className={`task ${task.importance === 0 ? 'low' : task.importance === 1 ? 'medium' : 'high'}`}>
            <InputGroup.Checkbox onChange={() => props.updateState(task)} checked={task.isAccomplished} type="checkbox" />
            {edit ?
                <div className="edit-mode">
                    <Form.Control type="text" defaultValue={task.taskName} ref={editRef} />
                    <div className="choice-button">
                        <Button variant="success" onClick={() => handleEdit()}>Submit</Button>
                        <Button variant="danger" onClick={() => setEdit(false)}>Cancel</Button>
                    </div>

                </div>
                :
                <p>{task.taskName}</p>
            }

            <div className="right-side">
                <Info className="info" onClick={() => setInfoIsOpen(true)} />
                <Edit className="edit-button" onClick={() => setEdit(!edit)} />
                <Delete className="delete-button" onClick={() => props.deleteItem(task)} />
            </div>
            <div className={`description ${infoIsOpen ? 'open' : ''} ${task.importance === 0 ? 'low' : task.importance === 1 ? 'medium' : 'high'}`}>
                <p>Published the {getFullDate(task.publicationDate)} at {getFullTime(task.publicationDate)}</p>
                {task.editTime && <p>Updated the {getFullDate(task.editTime)} at {getFullTime(task.editTime)}</p>}
                <p>The task is <b>{task.importance === 0 ? 'Low' : task.importance === 1 ? 'Medium' : 'High'}</b> priority</p>
                <Close className="close" onClick={() => setInfoIsOpen(false)} />
            </div>
        </div>
    )
}

