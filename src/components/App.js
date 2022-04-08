import Header from "./organisms/Header";
import Nav from "./organisms/Nav";

import BooksList from "./organisms/BooksList";

import store from "assets/redux/store";
import { Provider } from "react-redux";

function App() {
  console.log(store);
  return (
    <div className="App" style={{position:"relative"}}>
      <Provider store={store}>
        <Nav />
        <Header />
        <BooksList />
      </Provider>
    </div>
  );
}

export default App;
