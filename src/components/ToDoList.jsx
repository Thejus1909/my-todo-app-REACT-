import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
const ToDoList = (props) => {
    const [task, setTask] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task) {
            props.addTodo(task);
            setTask('');
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Add a new task"
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {props.todos.map((todo, index) => (
                    <ToDoItem
                        key={index}
                        todo={todo}
                        index={index}
                        editTodo={props.editTodo}
                        deleteTodo={props.deleteTodo}
                        toggleComplete={props.toggleComplete}
                        
                    />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;