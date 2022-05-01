import { isDisabled } from "@testing-library/user-event/dist/utils";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const WrapperItemMenu = styled.div`

display:flex; 
padding:10px;
justify-content:space-around; 
align-items:center;




`
 const StyledNavLink = styled(NavLink)`
    text-decoration:none; 
    color:grey;
    font-size:25px;
    text-transform:uppercase;

    &.active {
        
        font-weight:bold;
        color:black;
   }
    
`
const Circle = styled.div`
width:60px;
height:60px;
font-size:25px;
display:flex;
justify-content:center; 
align-items:center;
border-radius:50px;
border: 2px solid black; 


`


function ItemNavigationProcessOrder({pageName, numberSteps , path}) {

    const handle  = (e) => {
         console.log(e.target)
    };
    return (
     <WrapperItemMenu>
         <Circle>{numberSteps}</Circle>
     <StyledNavLink to={`/${path}`} onClick={handle} 
         >{pageName}</StyledNavLink>
            <Outlet/>
     </WrapperItemMenu>

    );
}

export default ItemNavigationProcessOrder;