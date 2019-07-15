import React from 'react';
const TodoItem = props => {
  return (
    <div className={`${props.item.completed}`} onClick={event => props.toggleTask(event, props.item.id)}>
      {props.item.value}
    </div>
  );
};

export default TodoItem;
