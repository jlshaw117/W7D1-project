import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodos, receiveTodo } from './actions/todo_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content');
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<Root />, root);
});
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
function Root() {
  return <h1>Todos App</h1>;
}