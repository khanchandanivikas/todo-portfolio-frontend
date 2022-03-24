import * as actionTypes from "./actionTypes";

export const toggleTodo = (type) => {
  return {
    type: actionTypes.FILTER_TODO,
    payload: type,
  };
};
