import React from 'react';
const TodoItem = props => {
  return (
    <div onClick={event => props.toggleTask(event, props.item.id)}>
      {props.item.value}
    </div>
  );
};

export default TodoItem;
