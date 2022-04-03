import styled from "styled-components";
import Colors from "theme/Colors";
import Logo from "components/atoms/Logo";
import SearchBooksMenuInput from "components/molecules/SearchBooksMenuInput";
import BasketIcon from "components/atoms/BasketIcon";
import device from "assets/device/device";

const StyledNav = styled.nav`
  width: 100%;
  background-color: ${Colors.BLACK};
`;
const StyledNavBarList = styled.div`

  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding: 20px 100px;



  @media ${device.tablet} {
    & {
     //zmienić padiing 
    }
  }
`;

function Nav() {
  return (
    <StyledNav>
      <StyledNavBarList>
        <Logo />
        <SearchBooksMenuInput />
        <BasketIcon />
      </StyledNavBarList>
    </StyledNav>
  );
}

export default Nav;
