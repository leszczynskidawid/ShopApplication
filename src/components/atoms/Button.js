import styled from "styled-components";

const StyledButton = styled.button`
  text-transform: uppercase;
  background-color: #fff;

  &:hover {
    color: #fff;
    background-color: #999;
  }
`;
function Button({ onClick, icon, title, backgroundColor }) {
  return (
    <StyledButton>
      {icon} <span>{title}</span>
    </StyledButton>
  );
}

export default Button;
