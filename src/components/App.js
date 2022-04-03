import Header from "./organisms/Header";
import Nav from "./organisms/Nav";
import BookCard from "./molecules/BookCard";
import BooksList from "./organisms/BooksList";

function App() {
  return (
    <div  className="App">
      <Nav />
      <Header/>
      <BooksList/>
    </div>
  );
}

export default App;
