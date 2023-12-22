import { useEffect, useState } from 'react';
import { NewTodoForm } from './NewTodoForm';
import { TodoList } from './TodoList';
import './styles.css';

export default function App() {
  // Add todo item to array
  const [todos, setTodos] = useState(() => {
    // Gets items from local storage
    const localValue = localStorage.getItem('ITEMS');
    //  Return empty array if local value is null
    if (localValue == null) return [];
    // Parse values in local storage and return it as the default value
    return JSON.parse(localValue);
  });

  // Make list items persist inside local storage
  useEffect(() => {
    // Function runs every time values in todos array changes and stores it inside local storage
    localStorage.setItem('ITEMS', JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  // Toggle todo checkbox to checked on click
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  // Delete todo item by ID from list
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      {/* Import NewTodoForm component  */}
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">To-Do List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
