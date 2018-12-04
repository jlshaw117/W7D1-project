import React from 'react';

class TodoList extends React.Component {
  render () {
    const { todos, receiveTodo } = this.props;
    const todoItems = todos.map((el) => {
      return (<li>{el.title}</li>);
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
