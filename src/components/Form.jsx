import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddTodo, fetchLoadTodos } from "../store/actions/todoActions";

const FormContainer = styled.div`
  .todo-list__input-wrapper {
    position: relative;
    margin: 2rem 0 1rem 0;

    &::before {
      content: "";
      position: absolute;
      top: 1.1rem;
      left: 1.5rem;
      width: 1.5rem;
      height: 1.5rem;
      border: 1px solid ${(props) => props.theme.color.form.checkbox};
      border-radius: 50%;
      background-color: transparent;
      transition: border 0.5s ease;
    }

    .todo-list__input {
      width: 100%;
      height: 4rem;
      border: none;
      border-radius: 5px;
      padding-left: 5rem;
      background: ${(props) => props.theme.color.form.bg};
      color: ${(props) => props.theme.color.form.inputText};
      font-size: 1.2rem;
      font-weight: 400;
      letter-spacing: -0.25px;
      transition: background 0.5s ease, color 0.5s ease;
      outline: none;

      @media only screen and (max-width: 600px) {
        font-size: 0.9rem;
      }
    }

    .todo-list__input::placeholder {
      color: ${(props) => props.theme.color.form.placeholder};
      font-family: "Josefin Sans", sans-serif;
    }
  }
`;

const Form = () => {
  const dispatch = useDispatch();
  const todoType = useSelector((state) => state.todoType);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    dispatch(fetchAddTodo(data));
    setTimeout(() => {
      dispatch(fetchLoadTodos(todoType));
    }, 1000);
    reset();
  };
  return (
    <FormContainer>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="todo-list__input-wrapper"
      >
        <input
          type="text"
          name="task"
          className="todo-list__input"
          placeholder="Create a new todo..."
          aria-label="add a new item to the todo list"
          {...register("task", { required: true })}
        />
        {errors.task && errors.task.type === "required" && (
          <span>Required</span>
        )}
      </form>
    </FormContainer>
  );
};

export default Form;
