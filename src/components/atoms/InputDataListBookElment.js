import { faHand } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";



const Wrraper = styled(Link)`
  display: flex;
  padding: 5px 5px;
  justify-content: space-between;
  text-decoration:none; 
  color:black;
  cursor: pointer;
  
  &:hover {
    opacity: 1;
    background-color: blue;
  }
`;

const ContentWrapper = styled.div`
  padding: 20px;
  font-size: 20px;
  max-width: 50%;
`;
const ButtonsContainer = styled.div`
  align-self: center;
`;

function InputDataListElmentBook({ book }) {
  const { title, authors, id } = book;

 

  return (
    <Wrraper to={`/${id}`}>
      <ContentWrapper>
        <h5>{title}</h5>
        <p>{authors[0]["name"]}</p>
      </ContentWrapper>

      <ButtonsContainer>
        <Button title="do koszyka" />
        
      </ButtonsContainer>
    </Wrraper>
  );
}

export default InputDataListElmentBook;
