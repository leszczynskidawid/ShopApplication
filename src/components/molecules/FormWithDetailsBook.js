import ElementList from "./ElmentList";
import styled from "styled-components";
import Button from "components/atoms/Button";
import { buttonlabels } from "constant/plLabels";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBookToBasketCart,  } from "assets/redux/reduxCartBasket/ActionCartBasket";





const StyledDiscribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 50px;
`;


function FormWithDetailsBok({ book }) {
  const { title, authors, download_count, languages, bookshelves, formats } =
    book;

    const booksInBasket = useSelector(state => state.reducerBasketCart.bookToBuy);
    const [avaiable, setAvaiable] = useState()
    
  

const dispatchAddBookintoBasket = useDispatch()
const handleAddBookInBasket  = () => {
  dispatchAddBookintoBasket(addBookToBasketCart(book))

  
};

useEffect(() => {


  
  const checkThatBookIsInBasket = booksInBasket.includes(book); 

  setAvaiable(checkThatBookIsInBasket)




},[]);


  return (
    <StyledDiscribeContainer>
      <h1>{title}</h1>

      <ElementList bookInfo={authors[0]["name"]} labeltxt={"author"} />
      <ElementList bookInfo={download_count} labeltxt={"liczba pobran"} />
      <ElementList bookInfo={languages} labeltxt={"język"} />
      <ElementList bookInfo={bookshelves.map(type => type)} labeltxt={"typ"} />
      <a href={formats["application/zip"] || formats["application/epub+zip"]}>
        Link do pobrania
      </a>
      <ElementList
        bookInfo="    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, optio. Perferendis, quos natus? Vel qui deserunt nostrum doloribus suscipit dolores quam praesentium tenetur veniam quaerat, reiciendis velit omnis minima ullam!
    Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque itaque rem non eaque iste, reiciendis cupiditate ipsa vel natus deleniti delectus corrupti commodi esse, fugiat quo hic fugit harum molestiae."
        labeltxt={"opis:"}
      />
      <div>
        <Button title={buttonlabels.labelAddBasket}  click = {handleAddBookInBasket}  disabled = {avaiable}/>
      </div>
 
    </StyledDiscribeContainer>
  );
}

export default FormWithDetailsBok;
