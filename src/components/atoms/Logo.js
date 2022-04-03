import styled from "styled-components";
import Colors from "theme/Colors";
import { FontTheme } from "theme/fonts";

const StyledLogo = styled.div`
  height: 100%;
  font-size: ${FontTheme.h4};

  & > a {
   
    letter-spacing: 0.2rem;
    font-weight: 900;
    text-decoration: none;
    color: ${Colors.GREY};
  }

  & > a:hover {
    color: ${Colors.GREY_DARK};
  }
`;
function Logo() {
  return (
    <StyledLogo>
      <a href="home">Books</a>
    </StyledLogo>
  );
}

export default Logo;
