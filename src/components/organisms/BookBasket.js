import TableBasketItem from "components/molecules/TableBasketItem";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import NavigationProcessOrder from "components/molecules/NavigationProcessOrder";
import NavigateButtonsContainer from "components/molecules/NavigateButtonsContainer";


const Wrapper = styled.div`
  min-height: 80vh; 
 margin-top: 70px;
  padding: 40px;  
`;
const StyledContainerBasket = styled.div``;
function BookBasket() {
  return (
    <Wrapper>
    < NavigationProcessOrder/>
      <StyledContainerBasket>
       <TableBasketItem />
      </StyledContainerBasket>
      <NavigateButtonsContainer/>
      <ToastContainer/>
     
    </Wrapper>
  );
}

export default BookBasket;
