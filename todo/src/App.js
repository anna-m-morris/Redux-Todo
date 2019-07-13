import React from 'react';
import { connect } from 'react-redux';

import Form from './components/form';
import List from './components/list';

import { addTask, toggle } from './actions';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { tasks: [] };
  }
  render() {
    return (
      <div className="App">
        <TodoList list={this.props.todos} />
        <TodoForm addTask={this.props.addTask} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

export default connect(
  mapStateToProps,
  { addTask }
)(App);
