import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
const App = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = (task) => {
        setTodos([...todos, { task, completed: false }]);
    };
    const deleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };
    const toggleComplete = (index) => {
        const newTodos = todos.map((todo, i) => i === index ? { ...todo, completed: !todo.completed } : todo);
        setTodos(newTodos);
   
    };
    const editTodo = (index, task) => {
        const newTodos = todos.map((todo, i) => i === index ? { ...todo, task } : todo);
        setTodos(newTodos);
        
    }
    return (
        <div>
            <Header />
            <ToDoList todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} editTodo={editTodo} toggleComplete={toggleComplete} />
        </div>
    );
};
export default App;