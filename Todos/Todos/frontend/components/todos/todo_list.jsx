import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {

  componentDidMount () {
    this.props.fetchTodos();
  }

  render () {
    const { todos, receiveTodo, createTodo } = this.props;
    const todoItems = todos.map((el) => {
      return (<TodoListItem todo={el}/>);
    });
    // debugger
    return (
      <div>
        <ul>
          {todoItems}
        </ul>
        <TodoForm receiveTodo={ receiveTodo } createTodo={ createTodo } />
      </div>
    );
  }
}

export default TodoList;
