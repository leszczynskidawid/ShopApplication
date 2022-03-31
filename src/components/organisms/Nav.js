import React from "react";
import styled from "styled-components";
import Navbar from "../molecules/Navbar";

const StyledNav = styled.nav`
  width: 100%;
  height: 80px;
  background-color: black;
`;

function Nav() {
  return (
    <StyledNav>
      <Navbar />
    </StyledNav>
  );
}

export default Nav;
