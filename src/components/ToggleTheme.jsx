import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/actions/themeActions";
import styled from "styled-components";

const ThemeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  width: 100%;
  box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);

  h1 {
    font-size: 2.5rem;
    letter-spacing: 1.2rem;

    @media only screen and (max-width: 600px) {
      font-size: 2rem;
      letter-spacing: 1rem;
    }
  }

  button {
    outline: none;
    background: transparent;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 1.5rem;
  }
`;

const ToggleTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  return (
    <ThemeContainer>
      <h1>TODO</h1>
      <button onClick={() => dispatch(toggleTheme())}>
        {theme === "dark" ? (
          <i className="fa-solid fa-sun"></i>
        ) : (
          <i className="fa-solid fa-moon"></i>
        )}
      </button>
    </ThemeContainer>
  );
};

export default ToggleTheme;
