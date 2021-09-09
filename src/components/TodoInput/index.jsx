import React, { useRef, useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import "./TodoInput.scss";
export default function TodoInput(props) {
    let input = useRef(null);
    let select = useRef(null);
    let [isClickable, setIsClickable] = useState(true);
    let handleButtonState = (e) => {
        let btnState = e.target.value ? false : true;
        setIsClickable(btnState)
    }
    let onClickHandler = () => {
        props.addItemHandler({
            value: input.current.value,
            importance: select.current.value
        });
        input.current.value = "";
        setIsClickable(true)
    }
    let resetHandler = () => {
        props.resetHandler();
    }
    return (
        <div className="todo-input">
            <Row>
                <InputGroup className="mb-3">
                    <Form.Control ref={input} onChange={handleButtonState} placeholder="submit a task" type="text" size="lg" />
                    <FloatingLabel controlId="floatingSelect" label="Importance" style={{ color: "grey", fontSize: "0.8rem" }}>
                        <Form.Select ref={select} name="importanceLvl" id="importanceLvl" size="sm">
                            <option value="0">Low</option>
                            <option value="1">Medium</option>
                            <option value="2">High</option>
                        </Form.Select>
                    </FloatingLabel>
                </InputGroup>
            </Row>

            <div className="actionBtn">
                <Button variant="dark" disabled={isClickable} onClick={onClickHandler}>Add task</Button>
                {!props.activeReset && <Button variant="dark" onClick={resetHandler}>Reset</Button>}
            </div>

        </div>
    )
}
