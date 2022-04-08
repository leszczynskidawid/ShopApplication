import BookCard from "components/molecules/BookCard";
import { useEffect } from "react";
import styled from "styled-components";
import { getDataBooks } from "assets/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import SpinerLoading from "components/atoms/SpinnerLoading";

const StyledConteinerBooksList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px 50px;
`;

const StyledTitleCategorySection = styled.h1`
  border-bottom: 0.3px solid black;
  width: 90%;
  padding: 30px;
  margin: auto;
`;

function BooksList({ title, data }) {
  const dipsatchBooks = useDispatch();
  const booksStateFetched = useSelector(state => state);
  const { loadingData, books, errorMsg } = booksStateFetched;

  console.log(booksStateFetched);
  useEffect(() => {
    dipsatchBooks(getDataBooks);
  }, []);

  const searchBooksforChildrenSection = () => {
    const searchBooksforChildren = books
      .filter(books => books.bookshelves[0] === "Children's Literature")
      .slice(0, 5);
    return searchBooksforChildren;
  };

  const searchBooksforPopularSection = () => {
    const popularBooksArray = books.sort(
      (prevBook, currentBook) =>
        prevBook.download_count - currentBook.dowload_count
    );
    const topPopularBooksList = popularBooksArray.slice(0, 5);

    return topPopularBooksList;
  };

  const DisplayFilteredBooks = filteredArrayBooks => {
    const book = filteredArrayBooks.map(book => (
      <BookCard key={book.id} dataBooks={book}></BookCard>
    ));
    return book;
  };

  return (
    <main>
      <section>
        <StyledTitleCategorySection>dla dzieci</StyledTitleCategorySection>

        <StyledConteinerBooksList>
          {loadingData ? <SpinerLoading /> : null}
          {DisplayFilteredBooks(searchBooksforChildrenSection())}
        </StyledConteinerBooksList>
      </section>

      <section>
        <StyledTitleCategorySection>Popularne teraz</StyledTitleCategorySection>

        <StyledConteinerBooksList>
          {loadingData ? <SpinerLoading /> : null}
          {DisplayFilteredBooks(searchBooksforPopularSection())}
        </StyledConteinerBooksList>
      </section>
    </main>
  );
}

export default BooksList;
