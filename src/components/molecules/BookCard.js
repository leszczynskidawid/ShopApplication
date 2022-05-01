import Button from "components/atoms/Button";
import styled from "styled-components";
import { getRandomIntInclusive } from "helpers/RandomNumberPrice";
import { FontTheme } from "theme/fonts";
import { buttonlabels } from "constant/plLabels";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBookToBasketCart } from "assets/redux/reduxCartBasket/ActionCartBasket";
import { useState,} from "react";

import { ToastContainer} from 'react-toastify';
import { notifySucces } from "./Toasts";



const StyledBookCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  width: 220px;
  height:  270px;
  text-align: center;
  cursor: pointer;

`;







const StyledImgBook = styled.img`
  width: 100px;
  height: 150px;
  margin-bottom: 10px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  flex: 2;
`;

const StyledParagraph = styled.p`
  font-size: ${FontTheme.h6};
`;



function BookCard({ dataBooks, disabled }) {
  const { title, formats, authors, price , id } = dataBooks;

  const addDispatch = useDispatch();
  const [buttonDisable, setButtonDisable] = useState(false);

  



  const handleAddProductIntoBasket = () => {


    if (!disabled) {
      addDispatch(addBookToBasketCart(dataBooks));
      setButtonDisable(false);
      notifySucces(`${title}, added into basket`)

    }
  };




  

  return (
    <StyledBookCard>
    
   
      <StyledLink to={`/${id}`}>
        <StyledImgBook src={formats["image/jpeg"]} alt="photo" />
        <h5>{title}</h5>
        <StyledParagraph>{authors[0]["name"]}</StyledParagraph>
        <h5>{price} zł</h5>
      </StyledLink>
      <Button
        title={disabled ? "W KOszyku" : buttonlabels.labelAddBasket}
        click={handleAddProductIntoBasket}
        disabled={disabled ? !buttonDisable : buttonDisable}
       
      />
       <ToastContainer/>
    
    </StyledBookCard>
  );
}

export default BookCard;
