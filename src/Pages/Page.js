import { Route, Routes } from "react-router-dom";
import BasketPage from "./BasketPage";
import BookDetailsPage from "./BookDetailPage";
import Home from "./Home";
import LoginPage from "./LoginPage";
import Nav from "components/organisms/Nav";
import Footer from "components/organisms/Foooter";

function Page() {
  return (
    <>
    <Nav/>
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:bookId" element={<BookDetailsPage />} />
      <Route path="/basket" element={<BasketPage />} />
      <Route path = "/login" element= {<LoginPage/>}/>
      <Route path="*" element={<Home/>} />

    </Routes>
    <Footer/>
    </>
  );
}

export default Page;
