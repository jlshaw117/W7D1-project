import TodoList from './todo_list';
import { connect } from 'react-redux';
import allTodos from '../../reducers/selectors';
import { receiveTodo, fetchTodos } from '../../actions/todo_actions';
// import fetchTodos from '../../action'


const mapStateToProps = state => ({
  todos: allTodos(state),
  state
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
