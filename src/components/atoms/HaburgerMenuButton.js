import { HAMBURGER_ICON } from "../icons/icons";
import styled from "styled-components";
import device from "../../assets/device/device";
function HamburgerMenuButton() {

const StyledButtonHamburger = styled.button`
color:white;
; 

`
    return ( 

    <StyledButtonHamburger>{HAMBURGER_ICON}</StyledButtonHamburger>
     );
}

export default HamburgerMenuButton;