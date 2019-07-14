import { ADD_TASK, TOGGLE_TASK } from './actions';

const initalState = {
  tasks: []
};

export const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Date.now(), value: action.payload, comopleted: false }
        ]
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(item => {
          if (item.id === action.payload) {
            return {
              ...item,
              completed: !item.completed
            };
          } else {
            return item;
          }
        })
      };
    default:
      return state;
  }
};
