import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { SEARCH_ICON } from "../icons/icons";
import styled from "styled-components";
import device from "../../assets/device/device";
import Colors from "theme/Colors";

const StyledSearchInputContainer = styled.div`
  width: 500px;
  display: flex;

  & > input {
    flex-grow: 2;
    border: none;
    border-radius: 10px 0 0 10px;
  }
  & > button {
    flex-grow: 1;
    border: none;
    border-radius: 0 10px 10px 0;
    background-color:${Colors.GREY_DARK}
  }
  @media ${device.tablet} {
    & {
      width:300px;
      
    }
   
  }
`;

function SearchBooksMenuInput() {
  return (
    <StyledSearchInputContainer>
      <Input placeholder="szukaj...." />
      <Button icon={SEARCH_ICON} />
    </StyledSearchInputContainer>
  );
}

export default SearchBooksMenuInput;
