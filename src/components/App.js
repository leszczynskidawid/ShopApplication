import Header from "./organisms/Header";
import store from "assets/redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "style/App.css";
import Page from "Pages/Page.js";
import Footer from "Pages/Foooter";
import Nav from "./organisms/Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <Provider store={store}>
          <Page />
        </Provider>
      </div>
    </Router>
  );
}

export default App;
