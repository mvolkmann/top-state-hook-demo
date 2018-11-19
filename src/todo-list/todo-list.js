import React, {useCallback} from 'react';
import {useTopState} from 'top-state-hook';

import './todo-list.scss';

export default function TodoList() {
  const [nextId, setNextId] = useTopState('nextId', 0);
  const [todoText, setTodoText] = useTopState('todoText', '');
  const [todos, setTodos] = useTopState('todos', []);
  console.log('todo-list.js x: todos =', todos);

  function addTodo() {
    const todo = {id: nextId, text: todoText, done: false};
    setTodos(todos.concat([todo]));
    setTodoText('');
    setNextId(nextId + 1);
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function toggleDone(id) {
    setTodos(
      todos.map(todo => (todo.id === id ? {...todo, done: !todo.done} : todo))
    );
  }

  const handleAdd = useCallback(() => addTodo());
  const handleDelete = useCallback(id => deleteTodo(id));
  const handleSubmit = useCallback(e => e.preventDefault()); // prevents form submit
  const handleText = useCallback(e => setTodoText(e.target.value));
  const handleToggleDone = useCallback(id => toggleDone(id));

  return (
    <div className="todo-list">
      <h2>Todos</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text">
            <input
              onChange={handleText}
              placeholder="todo text"
              value={todoText}
            />
          </label>
          <button disabled={todoText === ''} onClick={handleAdd}>
            +
          </button>
        </div>
      </form>
      {todos.map(todo => (
        <div className="todo" key={todo.id}>
          <input
            checked={todo.done}
            type="checkbox"
            onChange={() => handleToggleDone(todo.id)}
          />
          <span className={`done-${todo.done}`}>{todo.text}</span>
          <button className="delete-btn" onClick={() => handleDelete(todo.id)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
}
