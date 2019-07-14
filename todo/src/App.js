import React from 'react';
import { connect } from 'react-redux';

import TodoForm from './components/form';
import TodoList from './components/list';

import { addTask, toggleTask } from './actions';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { tasks: [] };
  }

  toggleHandler = (event, id) => {
    event.preventDefault();
    this.props.toggle(id);
  };

  render() {
    return (
      <div className="App">
        <TodoForm addTask={this.props.addTask} />
        <TodoList list={this.props.tasks} toggle={this.toggleHandler} />
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
  { addTask, toggleTask }
)(App);
