import styled from "styled-components";
import Colors from "theme/Colors";

const StyledButton = styled.button`
  text-transform: uppercase;
  padding: 5px 10px;
  border: none;
  background-color: ${props => (props.primary ? Colors.GREY : Colors.ORANGE)};
  border-radius: 5px;

  &:hover {
    color: ${Colors.GREY};
  }
`;
function Button({ icon, title }) {
  return (
    <StyledButton>
      {icon} <span>{title}</span>
    </StyledButton>
  );
}

export default Button;
