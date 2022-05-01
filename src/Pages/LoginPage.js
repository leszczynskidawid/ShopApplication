import FormRegister from "components/organisms/FormRegister";
import Nav from "components/organisms/Nav";
import Footer from "components/organisms/Foooter";
import NavigateButtonsContainer from "components/molecules/NavigateButtonsContainer";
import NavigationProcessOrder from "components/molecules/NavigationProcessOrder";
import styled from "styled-components";

const Wrapper = styled.div`
display:flex; 
flex-direction:column;
justify-content:space-between;
min-height:80vh;
width:90%;
margin:auto; 

margin-top:100px;

`
function LoginPage() {
    return (  
        <Wrapper>
        
 
        <NavigationProcessOrder/>
        <FormRegister/>
        <NavigateButtonsContainer/>
        
        </Wrapper>
       
    );
}

export default LoginPage;