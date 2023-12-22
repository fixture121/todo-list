import { TodoItem } from './TodoItem';

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {/* Display message if there are no todo items in list */}
      {todos.length === 0 && 'No Todos'}
      {/* Return array of elements */}
      {todos.map((todo) => {
        return (
          // Used todo.id as key for todos to have unique identifier in order to make changes to a specific todo list item
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
