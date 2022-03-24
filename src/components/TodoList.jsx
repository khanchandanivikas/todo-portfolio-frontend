import React from "react";
import styled from "styled-components";
import {
  fetchRemoveTodo,
  fetchCompleteTodo,
} from "../store/actions/todoActions";
import { useSelector, useDispatch } from "react-redux";

const ListItems = styled.ul`
  list-style-type: none;
  width: 100%;
  border-radius: 5px;
  padding: 0.5rem 1.5rem;
  background: ${(props) => props.theme.color.list.bg};
  color: ${(props) => props.theme.color.list.text};
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: -0.25px;
  box-shadow: ${(props) => props.theme.color.list.boxShadow};
  transition: background 0.5s ease, color 0.5s ease, box-shadow 0.5s ease;

  @media only screen and (max-width: 600px) {
    font-size: 0.9rem;
  }

  li {
    padding: 1rem 0;
    border-bottom: 1px solid ${(props) => props.theme.color.list.borderBottom};
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: border-bottom 0.5s ease;

    &:last-of-type {
      border-bottom: none;
    }

    .input-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;

      input {
        appearance: none;
        width: 1.5rem;
        height: 1.5rem;
        border: 1px solid ${(props) => props.theme.color.list.checkbox};
        border-radius: 50%;
        background-color: transparent;
        margin-right: 2rem;
        transition: all 0.3s ease;

        &:hover {
          border: 1px solid hsl(220, 98%, 61%);
          cursor: pointer;
        }

        &:checked {
          background-color: #711a78;
          position: relative;

          &::before {
            position: absolute;
            content: "✓";
            color: #fff;
            left: 5px;
            top: 2px;
            font-weight: 600;
          }
        }
      }
    }

    .fa-xmark {
      color: ${(props) => props.theme.color.list.deteteBtn};
      font-size: 1.5rem;
      opacity: 0;
      transition: opacity 0.3s ease;
      cursor: pointer;
    }

    &:hover .fa-xmark {
      opacity: 1;
    }
  }
`;

const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos);
  return (
    <main>
      <ListItems>
        {todoList.todos === "no result" || todoList.todos.length < 1 ? (
          <li style={{ justifyContent: "center" }}>No result</li>
        ) : (
          todoList.todos.map((todo) => {
            return (
              <li key={todo.id}>
                <span className="input-wrapper">
                  <input
                    onClick={() =>
                      dispatch(fetchCompleteTodo(todo.id, !todo.complete))
                    }
                    type="checkbox"
                    className="styled-checkbox"
                    checked={todo.complete.toString() === "true"}
                  />
                  <label htmlFor="">{todo.task}</label>
                </span>
                <i
                  onClick={() => dispatch(fetchRemoveTodo(todo.id))}
                  className="fa-solid fa-xmark"
                ></i>
              </li>
            );
          })
        )}
      </ListItems>
    </main>
  );
};

export default TodoList;
