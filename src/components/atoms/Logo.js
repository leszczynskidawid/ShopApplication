import styled from "styled-components";

const StyledLogo = styled.div`
  height: 100%;
  width: 10%;
  text-align: center;
  font-size: 1.5rem;

  & > a {
   
    letter-spacing: 0.2rem;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
  }

  & > a:hover {
    color: #999;
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
