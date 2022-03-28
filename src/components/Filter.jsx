import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../store/actions/todoTypeActions";
import { fetchClearCompletedTodos } from "../store/actions/todoActions";

const FilterBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-content: space-between;
  aligh-items: center;
  width: 100%;
  background: ${(props) => props.theme.color.filter.bg};
  border-radius: 5px;
  padding: 1.5rem;
  color: ${(props) => props.theme.color.filter.text};
  margin: 1rem 0;
  box-shadow: ${(props) => props.theme.color.filter.boxShadow};
  transition: background 0.5s ease, color 0.5s ease, box-shadow 0.5s ease;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    font-size: 0.85rem;
  }

  p {
    padding-top: 0.3rem;
  }
`;

const Button = styled.button`
  background: transparent;
  color: ${(props) => props.theme.color.filter.text};
  border: none;
  outline: none;
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.color.filter.hover};
  }
`;

const ClearButton = styled(Button)`
  @media only screen and (max-width: 600px) {
    text-align: end;
  }
`;

const FilterButton = styled(Button)`
  @media only screen and (max-width: 600px) {
    text-align: end;
  }

  &.active {
    color: #3a7cfd;
  }
`;

const FilterOptions = styled.div`
  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    order: 3;
    grid-column: 1/-1;
    padding-top: 1rem;
  }
`;

const Filter = () => {
  const todoType = useSelector((state) => state.todoType);
  const todoList = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const showTodo = (type) => {
    dispatch(toggleTodo(type));
  };

  return (
    <FilterBox>
      <p>
        {todoList.todos !== "no result" ? todoList.todos.length : 0} items left
      </p>
      <FilterOptions>
        <FilterButton
          className={todoType === "" && "active"}
          onClick={() => showTodo("")}
        >
          All
        </FilterButton>
        <FilterButton
          className={todoType === "incomplete" && "active"}
          onClick={() => showTodo("incomplete")}
        >
          Active
        </FilterButton>
        <FilterButton
          className={todoType === "complete" && "active"}
          onClick={() => showTodo("complete")}
        >
          Completed
        </FilterButton>
      </FilterOptions>
      <ClearButton onClick={() => dispatch(fetchClearCompletedTodos())}>
        Clear Completed
      </ClearButton>
    </FilterBox>
  );
};

export default Filter;
