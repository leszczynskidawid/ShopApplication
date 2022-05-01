import styled from "styled-components";
import ItemNavigationProcessOrder from "components/atoms/ItemNavigationProcesOrder";


const Wrapper = styled.div`

width:100%; 
height:70px;
border:2px solid black;
display:flex; 
justify-content:space-around;
border-radius:10px;


`
function NavigationProcessOrder() {
    return (
        <Wrapper>
            <ItemNavigationProcessOrder path = {"basket"}pageName={"koszyk"} numberSteps ={1}/>
            <ItemNavigationProcessOrder  path = {"login"}pageName={"podsumowanie"} numberSteps ={2}/>
            <ItemNavigationProcessOrder  path = "/order" pageName={"zamowienie"} numberSteps ={3}/>

        </Wrapper>
      );
}

export default NavigationProcessOrder;