import * as actionTypes from "../actions/actionTypes";

const initialState = { todos: [] };

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_TODO:
      return { ...state, todos: action.payload };

    case actionTypes.ADD_TODO:
      return { ...state, todos: [action.payload, ...state.todos] };

    case actionTypes.REMOVE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((elem) => elem.id !== action.payload)],
      };

    case actionTypes.COMPLETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((item) => {
            if (item.id !== action.payload) return item;
            return { ...item, complete: !JSON.parse(item.complete) };
          }),
        ],
      };

    case actionTypes.CLEAR_COMPLETED_TODOS:
      return {
        ...state,
        todos: [...state.todos.filter((item) => !JSON.parse(item.complete))],
      };

    default:
      return state;
  }
};

export default todoReducer;
