import styled from "styled-components";

import Logo from "../atoms/Logo";
import SearchBooksMenuInput from "./SearchBooksMenuInput";
import BasketIcon from "../atoms/BasketIcon";

const StyledNavBarUlComponents = styled.ul`
  margin: 0;
  width: 80%;
  height: 100%;
  margin: auto;
  list-style-type: style none;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  box-sizing: border-box;
`;

function Navbar() {
  return (
    <StyledNavBarUlComponents>
      <Logo />
      <SearchBooksMenuInput />
      <BasketIcon />
    </StyledNavBarUlComponents>
  );
}

export default Navbar;
