import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from "../reducers"

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}
interface AppState {
  fetching: boolean;
}
class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { fetching: false }
  }
  componentDidUpdate(prevProps: AppProps): void {

    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false })
    }
  }
  onButtonClick = (): void => {

    this.props.fetchTodos();

    this.setState({ fetching: true })
  }
  _deleteTodo = (id: number): void => {
    this.props.deleteTodo(id)
  }
  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) =>
      <li
        key={todo.id}
        onClick={() => this._deleteTodo(todo.id)}
      >
        {todo.title}
      </li>
    )
  }
  render() {
    return (
      <ul>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.state.fetching ? "LOADING" : null}
        {this.renderList()}
      </ul>
    )
  }
}
const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => ({
  todos
})
const actions = { fetchTodos, deleteTodo }
export const App = connect(mapStateToProps, actions)(_App);