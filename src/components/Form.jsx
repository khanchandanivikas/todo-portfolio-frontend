import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddTodo, fetchLoadTodos } from "../store/actions/todoActions";

const Formulario = styled.form`
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
`;

const Input = styled.input`
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

  &::placeholder {
    color: ${(props) => props.theme.color.form.placeholder};
    font-family: "Josefin Sans", sans-serif;
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
    <div>
      <Formulario action="" onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          name="task"
          placeholder="Create a new todo..."
          aria-label="add a new item to the todo list"
          {...register("task", { required: true })}
        />
        {errors.task && errors.task.type === "required" && (
          <span>Required</span>
        )}
      </Formulario>
    </div>
  );
};

export default Form;
