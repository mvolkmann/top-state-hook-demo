import React from 'react';
import {refreshState} from 'top-state-hook';

import Counter from './counter';
import FormDemo from './form-demo';
import Report from './report';
import TodoList from './todo-list/todo-list';

import './App.scss';

//setOptions({});

export default function App() {
  refreshState();
  return (
    <div>
      <TodoList />
      <FormDemo />
      <Report />
      <Counter />
    </div>
  );
}
