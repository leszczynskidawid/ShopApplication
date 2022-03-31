import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { SEARCH_ICON } from "../icons/icons";
import styled from "styled-components";

const StyledSearchInputContainer = styled.div`
  width: 500px;
  display: flex;

  & > input {
    flex-grow: 2;
    border: none;
    border-radius: 10px 0 0 10px;
  }
  & > button {
    flex: 1;
    border: none;
    border-radius: 0 10px 10px 0;
    background-color: grey;
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
