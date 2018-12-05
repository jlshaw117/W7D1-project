import React from 'react';
import TodoListItem from './todo_list_item';
import TodoListForm from './todo_form';

class TodoList extends React.Component {

  componentDidMount () {
    this.props.fetchTodos();
  }

  render () {
    const { todos, receiveTodo } = this.props;
    const todoItems = todos.map((el) => {
      return (<TodoListItem todo={el}/>);
    });
    // debugger
    return (
      <div>
        <ul>
          {todoItems}
        </ul>
        <TodoListForm receiveTodo={ receiveTodo }/>
      </div>
    );
  }
}

export default TodoList;
