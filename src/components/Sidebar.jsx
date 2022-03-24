import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import desktopDark from "../images/bg-desktop-dark.jpg";
import desktopLight from "../images/bg-desktop-light.jpg";

const Sidebarr = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 300px;
  transition: background-image 1s ease;
`;

const Sidebar = () => {
  const theme = useSelector((state) => state.theme);
  return (
    <Sidebarr
      style={{
        backgroundImage: `url(${
          theme === "dark" ? desktopDark : desktopLight
        })`,
      }}
    ></Sidebarr>
  );
};

export default Sidebar;
