import React from 'react';
import uniqueId from '../../util/todo_util';

class TodoForm extends React.Component {

  constructor (props) {
    super (props);

    this.state = {
      title: "",
      body: "",
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId() });
    this.props.receiveTodo(todo);
    this.setState({
      title: "",
      body: ""
    });
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  render () {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <label>
          Title
          <input type="text" ref='title' value={this.state.title} placeholder="buy milk" onChange={this.update('title')} required />
        </label>
        <label>
          Body
          <textarea ref='body' value={this.state.body} placeholder="buy whatever you want" onChange={this.update('body')} required>

          </textarea>
        </label>

        <input type="submit" name="" value="Create Todo!" />
      </form>
    );
  }
}

export default TodoForm;
