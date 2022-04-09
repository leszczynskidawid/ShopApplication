import { Route, Routes } from "react-router-dom";
import BasketPage from "./BasketPage";
import BookDetails from "./BookDetail";
import Home from "./Home";

function Page() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:bookId" element={<BookDetails />} />
      <Route path="/basket" element={<BasketPage />} />
      <Route path="*" element={<Home/>} />
    </Routes>
  );
}

export default Page;
