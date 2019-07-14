import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTask: ''
    };
  }

  changeHandler = event => {
    this.setState({
      newtask: event.target.value
    });
  };
  addHandler = event => {
    event.preventDefault();
    this.props.addTask(this.state.newTask);
    this.setState({
      newTask: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.addHandler}>
        <input
          placeholder="What's next?"
          value={this.state.newTask}
          onChange={this.changeHandler}
        />
        <button>Add</button>
      </form>
    );
  }
}
export default TodoForm