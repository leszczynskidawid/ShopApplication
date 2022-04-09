import BookCard from "components/molecules/BookCard";
import { useEffect } from "react";

import { getDataBooks } from "assets/redux/actions";
import { useDispatch, useSelector } from "react-redux";

import SectionCategoryBooks from "./SectionCategoryBooks";
import { titles } from "constant/pl_en_labels";



function BooksList() {
  const fetchBooks = useDispatch();
  const booksStateFetched = useSelector(state => state);
  const { isloadingData, books, errorMsg } = booksStateFetched;
  useEffect(() => {
    fetchBooks(getDataBooks);
  }, []);

  const searchBooksforChildrenSection = () => {
    return books
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
    return filteredArrayBooks.map(book => (
      <BookCard key={book.id} dataBooks={book}></BookCard>
    ));
  };

  return (
    <main>
      <SectionCategoryBooks data = {displayFilteredBooks(searchBooksforChildrenSection())} isloadingData = {isloadingData}  title= {titles.titleSectionForChild}/>
      <SectionCategoryBooks data = {displayFilteredBooks(searchBooksforPopularSection())} isloadingData = {isloadingData}  title= {titles.titleSectionMostPopular}/>
    </main>
  );
}

export default BooksList;
