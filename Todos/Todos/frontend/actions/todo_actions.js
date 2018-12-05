import * as APIUtil from '../util/todo_api_util';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos: todos
});
export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo: todo
});

export const fetchTodos = () => dispatch => {
  APIUtil.fetchTodos()
    .then(res => {
      dispatch(receiveTodos(res));
    });
};
export const createTodo = (todo) => dispatch => {
  APIUtil.createTodo()
    .then(todo => {
      dispatch(receiveTodo(todo));
    }, (res) => console.log(res));
};

window.fetchTodos = fetchTodos;
