import styled from "styled-components";
import Colors from "theme/Colors";
import React from 'react';


const StyledButton = styled.button`
  text-transform: uppercase;
  padding: 10px 25px;
  border: none;
  background-color: ${props => props.inputColor || Colors.ORANGE};
  border-radius: 5px;
  cursor:pointer;

  &:hover {
    color: ${Colors.GREY};
  }
`;

function Button({ icon, title, click, id ,disabled , type}) {
  return (
    <>
      <StyledButton onClick={click} id={id} disabled={disabled} type= {type}>
        {icon} {title}
      </StyledButton>
    </>
  );
}

export default Button;
