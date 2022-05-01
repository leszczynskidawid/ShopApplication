import InputDataListElmentBook from "components/atoms/InputDataListBookElment";
import styled from "styled-components";


const StyledDataListWrapper = styled.ul`

flex-direction:column; 
position:absolute;
width:100%;
display:flex;
opacity:0.9; 
background-color:white;
overflow:hidden; 

`

function InputDataListSearch({books}) {
    return ( 

        <StyledDataListWrapper id="list">
        { books.slice(0, 5).map( book => <InputDataListElmentBook book = {book}/>) }
      </StyledDataListWrapper>


    )
}

export default InputDataListSearch;