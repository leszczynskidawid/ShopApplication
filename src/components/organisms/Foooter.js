import styled from "styled-components";
import Colors from "theme/Colors";

const StyledFooterContainer = styled.div`
  width: 100%;
  padding: 40px;
  background: ${Colors.GREY_DARK};
`;
function Footer() {
  return (
    <StyledFooterContainer>
      <h1>footer </h1>
    </StyledFooterContainer>
  );
}

export default Footer;
