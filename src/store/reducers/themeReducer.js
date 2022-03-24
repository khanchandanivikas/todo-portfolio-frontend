import * as actionTypes from "../actions/actionTypes";

const themeReducer = (state = "dark", action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_THEME:
      return state === "dark" ? action.payload.light : action.payload.dark;
    default:
      return state;
  }
};

export default themeReducer;
