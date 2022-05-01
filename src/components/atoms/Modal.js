



import styled from "styled-components";
import { keyframes } from "styled-components";
import Colors from "theme/Colors";
import Button from "./Button";


const slideIn = keyframes`
0% {
    transform: translateY(-100px);
    animation-timing-function: ease-out;
  }
  60% {
    transform: translateY(10px);
    animation-timing-function: ease-in;
  }
  80% {
    transform: translateY(5px);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translateY(0px);
    animation-timing-function: ease-in;
  }
`
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const WrraperModalWindow = styled.div`
background-color: ${props=> props.delete ? Colors.ORANGE : Colors.RED };
position:fixed;
padding:10px;
flex-direction:column; 
top:-100%; 
left:calc(50% - 200px);
z-index:999;
width:400px; 
text-align:center;
border-radius:10px;



&.active
{

top:calc(30% - 25px); 
animation: ${fadeIn} 1s, ${slideIn} 0.8s linear;
}

`
const StyledButtonContainer = styled.div`
display:flex;
justify-content:space-around;


`
const  SButton = styled(Button)`
padding:0 20px; 
background-color:red;
`




function Modal({className, itemName, modalButtonActions}) {
   


    return ( 
        <WrraperModalWindow className = {className}> 
        
          <span> Do you want delete <strong> {itemName} </strong>  </span>  
            <StyledButtonContainer >

            <SButton title={"Anuluj"}  id = "1" click= {modalButtonActions} /> 
             <SButton title = {"YEs"} id = "2" click = {modalButtonActions} /> 
            </StyledButtonContainer>
         

            
        </WrraperModalWindow>
     );
} 

export default Modal;