import Button from "components/atoms/Button";
import styled from "styled-components";
import Colors from "theme/Colors";
import { getRandomIntInclusive } from "helpers/RandomNumberPrice";
import BooksList from "components/organisms/BooksList";
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
 &:hover{
   transform:scale(1.1);
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

function BookCard({ dataBooks }) {
  const { title } = dataBooks;

  console.log();
  return (
    <StyledBookCard>
      <StyledImgBook src={dataBooks.formats["image/jpeg"]} alt="photo" />

      <div style={{ flex: 2 }}>
        <h5>{title}</h5>
        <StyledParagraph>{dataBooks.authors[0]["name"]}</StyledParagraph>
        <h5>{getRandomIntInclusive(0, 150)} zł</h5>
      </div>

      <Button title="do koszyka" />
    </StyledBookCard>
  );
}

export default BookCard;
