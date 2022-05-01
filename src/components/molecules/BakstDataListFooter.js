import Button from "components/atoms/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledSpan = styled.span`
  font-size: 15px;
`;
const Wrapper = styled.div`
  padding: 5px 40px;
`;
const ButtonWrapper = styled.div`
  border-top: 1px solid black;
`;

function BasketDataListFooter({ count }) {
  if (count === 0) {
    return <span>is empty</span>;
  } else if (count > 0 && count < 5) {
    return (
        <Wrapper>
        <StyledSpan>{count} w koszyku </StyledSpan>
        <ButtonWrapper>
         <Link to="/basket"> <Button title={"przejdz do podusmowania"}/></Link>
          <Link to = "/form"> <Button title={"przejdz do koszyka"} /></Link> 
        </ButtonWrapper>
      </Wrapper>
    );
  } else if (count > 5) {
    return (
        <Wrapper>
        <StyledSpan>{count -5} w koszyku </StyledSpan>
        <ButtonWrapper>
         <Link to="/basket"> <Button title={"przejdz do koszyka"}/></Link>
          <Link to = "/form"> <Button title={"przejdz do posumowania"} /></Link> 
        </ButtonWrapper>
      </Wrapper>
    )
  }
}
export default BasketDataListFooter;
