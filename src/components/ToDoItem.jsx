import { useState } from "react";

const ToDoItem = (props) => {
    const [isEdit, setIsEdit] = useState(false)
    const [task, setTask] = useState(props.todo.task);
    return (
        <li style={{ textDecoration: props.todo.completed ? 'line-through' : '' }}>
            {console.info (isEdit)}
            {isEdit ? (<>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Add a new task"
                />
                <button onClick={() => {
                    props.editTodo(props.index, task)
                    setIsEdit(false)
                }}>Save</button>
            </>)
                : (<>
                    {props.todo.task}
                    {!props.todo.completed && <button onClick={() => setIsEdit(true)}>Edit</button> }
                    <button onClick={() => props.toggleComplete(props.index)}>
                        {props.todo.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button onClick={() => props.deleteTodo(props.index)}>Delete</button>
                </>)}

        </li>

    );
};
export default ToDoItem;