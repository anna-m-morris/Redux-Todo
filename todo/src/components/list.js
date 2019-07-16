import React from 'react';
import TodoItem from './item';

const TodoList = props => {
  return (
    <div>
      {props.list.map((item, index) => (
        <TodoItem item={item} key={index} toggleTask={props.toggleTask} />
      ))}
    </div>
  );
};

export default TodoList;
