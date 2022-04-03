import styled from "styled-components";
import Colors from "theme/Colors";

const StyledButton = styled.button`
  text-transform: uppercase;
  background-color: #fff;

  &:hover {
    color: ${Colors.WHITE};
    background-color: ${Colors.GREY};
  }
`;
function Button({  icon, title }) {
  return (
    <StyledButton>
      {icon} <span>{title}</span>
    </StyledButton>
  );
}

export default Button;
