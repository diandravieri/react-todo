import './App.css';
import { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todoInput.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: todoInput,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTodoInput('');
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-app">
      <h1>TODO LIST</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={todoInput}
          onChange={handleInputChange}
          placeholder="TAMBAHKAN LIST"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
            />
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
