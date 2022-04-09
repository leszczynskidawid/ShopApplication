import Slider from "components/molecules/Slider";
import BooksList from "components/organisms/BooksList";
import Nav from "components/organisms/Nav";
import Footer from "./Foooter";

function Home() {
    return (  
      <>
        <Nav/>
        <Slider/>
        <BooksList/>
        <Footer/>

      </>

    );
}

export default Home; 
