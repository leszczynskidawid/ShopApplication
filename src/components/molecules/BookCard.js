import Button from "components/atoms/Button";
import styled from "styled-components";
import { getRandomIntInclusive } from "helpers/RandomNumberPrice";
import { FontTheme } from "theme/fonts";
import { buttonlabels } from "constant/plLabels";

const StyledBookCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  width: 220px;
  height: 270px;
  text-align: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;
const StyledImgBook = styled.img`
  width: 100px;
  height: 150px;
  margin-bottom: 10px;
`;

const StyledParagraph = styled.p`
  font-size: ${FontTheme.h6};
`;

const StyledInformationBooksContainer = styled.div`
  flex: 2;
`;

function BookCard({ dataBooks }) {
  const { title, formats, authors } = dataBooks;

  return (
    <StyledBookCard>
      <StyledImgBook src={formats["image/jpeg"]} alt="photo" />

      <StyledInformationBooksContainer>
        <h5>{title}</h5>
        <StyledParagraph>{authors[0]["name"]}</StyledParagraph>
        <h5>{getRandomIntInclusive(0, 150)} zł</h5>
      </StyledInformationBooksContainer>

      <Button title={buttonlabels.labelAddBasket} />
    </StyledBookCard>
  );
}

export default BookCard;
