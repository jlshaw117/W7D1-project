import React from 'react';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component {
  render () {
    const { todos, receiveTodo } = this.props;
    const todoItems = todos.map((el) => {
      return (<TodoListItem todo={el}/>);
    });
    // debugger
    return (
      <ul>
        {todoItems}
      </ul>
    );
  }
}

export default TodoList;
