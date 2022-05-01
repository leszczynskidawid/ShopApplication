import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { SEARCH_ICON } from "../icons/icons";
import styled from "styled-components";
import device from "../../assets/device/device";
import Colors from "theme/Colors";
import InputDataListSearch from "./InputDataListSearch";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getFilteredBooks } from "helpers/getFilteredBooks";


const Wrapper = styled.div`
position:relative
`
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
    background-color: ${Colors.GREY_DARK};
  }
  @media ${device.tablet} {
    & {
      width: 300px;
    }
  }
`;

function SearchBooksMenuInput() {


  
  const [value, setValue] = useState("")
  const [isOpen, setIsopen] = useState(false)

  const booksStateFetched = useSelector(state => state.reducerBooks.books); 

  useEffect(()=>
  {
    if(getFilteredBooks(value, booksStateFetched ) === 0 || value.length === 0 )
    {
      setIsopen(false)
    }
    else{
      setIsopen(true)
    }

  },[value])

  const handleOnChangeInput = (e) => {

    setValue(e.currentTarget.value)
 

  
  
  };
  return (
    <Wrapper>
    <StyledSearchInputContainer>
      <Input placeholder="szukaj...." list = "list" onChange = {handleOnChangeInput}  value = {value} />
      <Button icon={SEARCH_ICON} />
  
    </StyledSearchInputContainer>
    {isOpen && <InputDataListSearch list= "list" books = {getFilteredBooks(value, booksStateFetched )}/>}
    </Wrapper>
  );
}

export default SearchBooksMenuInput;
