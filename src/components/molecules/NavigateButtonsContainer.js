import Button from "components/atoms/Button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const StyledWrapper = styled.div`
position:sticky;
background-color:white;
font-size:50px;
border-top:1px solid black; 
opacity:0.9;
padding:10px 0; 
bottom:0;
width:100%;
margin:auto;
 display:flex;
justify-content:space-between;
`

function NavigateButtonsContainer() {



  

    const navigate = useNavigate()
    return ( 

        <StyledWrapper>
            
            <Button title= "Wróć do sklepu "  click={()=>navigate(-1)} />
            <Button title = "przejdz dalej" click={()=>navigate("/login")}/>
        

        </StyledWrapper>
     );
}

export default NavigateButtonsContainer;