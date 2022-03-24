import * as actionTypes from "../actions/actionTypes";

const todoTypeReducer = (state = "", action) => {
  switch (action.type) {
    case actionTypes.FILTER_TODO:
      return (state = action.payload);
    default:
      return state;
  }
};

export default todoTypeReducer;
