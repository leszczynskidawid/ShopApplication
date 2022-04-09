import BookCard from "components/molecules/BookCard";
import { useEffect } from "react";
import { getDataBooks } from "assets/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import SectionCategoryBooks from "./SectionCategoryBooks";
import { titles } from "constant/plLabels";

function BooksList() {
  const fetchData = useDispatch();
  const booksStateFetched = useSelector(state => state);
  const { isLoadingData, books, errorMsg } = booksStateFetched;


  useEffect(() => {
    fetchData(getDataBooks);
  }, []);

  const searchBooksforChildrenSection = () => {
    return  books
      .filter(books => books.bookshelves[0] === "Children's Literature")
      .slice(0, 5);

  };

  const searchBooksforPopularSection = () => {
    const popularBooksArray = books.sort(
      (prevBook, currentBook) =>
        prevBook.download_count - currentBook.dowload_count
    );
    const topPopularBooksList = popularBooksArray.slice(0, 4);

    return topPopularBooksList;
  };

  const displayFilteredBooks = filteredArrayBooks => {
    return  filteredArrayBooks.map(book => (
      <BookCard key={book.id} dataBooks={book}></BookCard>
    ));
 
  };

  return (
    <main>
      <SectionCategoryBooks
        data={displayFilteredBooks(searchBooksforChildrenSection())}
        isloadingData={isLoadingData}
        title={titles.titleSectionForChild}
      />
      <SectionCategoryBooks
        data={displayFilteredBooks(searchBooksforPopularSection())}
        isloadingData={isLoadingData}
        title={titles.titleSectionMostPopular}
      />
    </main>
  );
}

export default BooksList;
