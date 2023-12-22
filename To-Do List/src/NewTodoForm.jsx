import { useState } from 'react';

export function NewTodoForm({ onSubmit }) {
  // useState to modify variables and make app interactive
  const [newItem, setNewItem] = useState('');

  // Handle form submission
  function handleSubmit(e) {
    // Prevent page from refreshing
    e.preventDefault();

    // Check if new item is an empty string
    if (newItem === '') return;
    onSubmit(newItem);

    // Clear form input field once item is added to list
    setNewItem('');
  }

  return (
    // Used fragment to return multiple elements from this component
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
