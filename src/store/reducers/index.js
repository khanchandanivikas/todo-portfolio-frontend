import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import themeReducer from "./themeReducer";
import todoTypeReducer from "./todoTypeReducer";

const reducers = combineReducers({
  todos: todoReducer,
  theme: themeReducer,
  todoType: todoTypeReducer
});

export default reducers;
