import Button from "components/atoms/Button";
import styled from "styled-components";

import { getRandomIntInclusive } from "helpers/RandomNumberPrice";

import { FontTheme } from "theme/fonts";

const StyledBookCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  width: 220px;
  height: 270px;
  text-align: center;
  cursor: pointer;

`;
const StyledImgBook = styled.img`
  width: 100px;
  height: 150px;
  margin-bottom: 10px;
`;

const StyledParagraph = styled.p`
  font-size: ${FontTheme.h6};
`;
const StyledInformationAboutBookContainer = styled.div`
  flex: 2;
`;

function BookCard({ dataBooks }) {
  const { title } = dataBooks;



  return (
    <StyledBookCard>
      <StyledImgBook src={dataBooks.formats["image/jpeg"]} alt="photo" />

      <StyledInformationAboutBookContainer >
        <h5>{title}</h5>
        <StyledParagraph>{dataBooks.authors[0]["name"]}</StyledParagraph>
        <h5>{getRandomIntInclusive(0, 150)} zł</h5>
      </StyledInformationAboutBookContainer>

      <Button title="do koszyka" />
    </StyledBookCard>
  );
}

export default BookCard;
