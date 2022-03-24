import GlobalStyles from "./globalStyles";
import styled, { ThemeProvider } from "styled-components";
import Sidebar from "./components/Sidebar";
import ToggleTheme from "./components/ToggleTheme";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import { light, dark } from "./Themes";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLoadTodos } from "./store/actions/todoActions";

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: -220px;

  .container {
    width: 40%;
    max-width: 67rem;

    @media only screen and (max-width: 1300px) {
      width: 50%;
    }

    @media only screen and (max-width: 1024px) {
      width: 65%;
    }

    @media only screen and (max-width: 768px) {
      width: 85%;
    }
  }
`;

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const todoType = useSelector((state) => state.todoType);
  useEffect(() => {
    dispatch(fetchLoadTodos(todoType));
    // eslint-disable-next-line
  }, [todoType]);

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <div className="App">
        <GlobalStyles />
        <Sidebar />
        <Wrapper>
          <div className="container">
            <ToggleTheme />
            <Form />
            <TodoList />
            <Filter />
          </div>
        </Wrapper>
      </div>
    </ThemeProvider>
  );
}

export default App;
