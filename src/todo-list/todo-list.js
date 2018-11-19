import React, {useCallback} from 'react';
import {useTopState} from 'top-state-hook';

import './todo-list.scss';

export default function TodoList() {
  const [nextId, nextIdUpdate] = useTopState('nextId', 0);
  const [todoText, todoTextUpdate] = useTopState('todoText', '');
  const [todos, todosUpdate] = useTopState('todos', []);

  function addTodo() {
    const todo = {id: nextId, text: todoText, done: false};
    todosUpdate.push(todo);
    todoTextUpdate.set('');
    nextIdUpdate.increment();
  }

  function deleteTodo(id) {
    todosUpdate.filter(todo => todo.id !== id);
  }

  function toggleDone(id) {
    todosUpdate.map(todo =>
      todo.id === id ? {...todo, done: !todo.done} : todo
    );
  }

  const handleAdd = useCallback(() => addTodo());
  const handleDelete = useCallback(id => deleteTodo(id));
  const handleSubmit = useCallback(e => e.preventDefault()); // prevents form submit
  const handleText = useCallback(e => todoTextUpdate.set(e.target.value));
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
