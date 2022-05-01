import SpinerLoading from "components/atoms/SpinnerLoading";

import FormWithDetailsBok from "components/molecules/FormWithDetailsBook";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Colors from "theme/Colors";

const StyledContainer = styled.div`
  /* min-height: 80vh; */
  margin-top: 70px;
  padding: 60px;
`;

const Wrapper = styled.div`
  border: 1px solid ${Colors.BLACK};
  display: flex;
  padding: 40px;
`;

function BookDetails() {
  const fetchbook = useSelector(state => state.reducerBooks);
  const { books } = fetchbook;
  const param = useParams();
  const bookId = param.bookId;

  const [bookDetails, setBookDetails] = useState([]);

  useEffect(() => {
    const findedBookDetails = books.find(book => book.id === Number(bookId));
    setBookDetails(findedBookDetails);
  }, []);

  if (bookDetails.length === 0) {
    return <SpinerLoading />;
  } else {
    return (
      <StyledContainer>
        <Wrapper>
          <div>
            <img src={bookDetails.formats["image/jpeg"]} alt="" />
          </div>
          <FormWithDetailsBok book={bookDetails} />
        </Wrapper>
      </StyledContainer>
    );
  }
}

export default BookDetails;
