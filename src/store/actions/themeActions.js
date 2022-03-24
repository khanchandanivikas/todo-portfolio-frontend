import * as actionTypes from "./actionTypes";

export const toggleTheme = () => {
  return {
    type: actionTypes.TOGGLE_THEME,
    payload: {
      light: "light",
      dark: "dark",
    },
  };
};
