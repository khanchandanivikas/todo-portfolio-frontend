import * as actionTypes from "./actionTypes";
import axios from "axios";

export const getAllTodos = (todos) => {
  return {
    type: actionTypes.GET_ALL_TODO,
    payload: todos,
  };
};

export const addTodo = (todo) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: todo,
  };
};

export const removeTodo = (id) => {
  return {
    type: actionTypes.REMOVE_TODO,
    payload: id,
  };
};

export const clearCompletedTodos = () => {
  return {
    type: actionTypes.CLEAR_COMPLETED_TODOS,
  };
};

export const completeTodo = (id) => {
  return {
    type: actionTypes.COMPLETE_TODO,
    payload: id,
  };
};

export const fetchLoadTodos = (todoType) => {
  return function (dispatch) {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + `/api/todoPortfolio/${todoType}`)
      .then((response) => {
        dispatch(getAllTodos(response.data));
      })
      .catch((res) => {
        console.log(res);
      });
  };
};

export const fetchAddTodo = (todo) => {
  return function (dispatch) {
    axios
      .post(process.env.REACT_APP_BACKEND_URL + `/api/todoPortfolio/`, todo)
      .then((response) => {
        dispatch(addTodo(response.data.todo));
      })
      .catch((res) => {
        console.log(res);
      });
  };
};

export const fetchRemoveTodo = (id) => {
  return function (dispatch) {
    axios
      .delete(process.env.REACT_APP_BACKEND_URL + `/api/todoPortfolio/${id}`)
      .then(() => {
        dispatch(removeTodo(id));
      })
      .catch((res) => {
        console.log(res);
      });
  };
};

export const fetchClearCompletedTodos = () => {
  return function (dispatch) {
    axios
      .delete(
        process.env.REACT_APP_BACKEND_URL + "/api/todoPortfolio/delete/deleteCompleted"
      )
      .then(() => {
        dispatch(clearCompletedTodos());
      })
      .catch((res) => {
        console.log(res);
      });
  };
};

export const fetchCompleteTodo = (id, status) => {
  console.log(status)
  return function (dispatch) {
    axios
      .put(process.env.REACT_APP_BACKEND_URL + `/api/todoPortfolio/complete/${id}`, {
        complete: status,
      })
      .then((res) => {
        console.log(res)
        dispatch(completeTodo(id));
      })
      .catch((res) => {
        console.log(res);
      });
  };
};
