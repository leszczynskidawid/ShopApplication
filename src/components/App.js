import Page from "Pages/Page";
import store from "assets/redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{display:"flex" ,flexDirection: "column" }}>

      <Provider store={store}>
 
        <Router>
   
          <Page />
     
        </Router>
      
      </Provider>
    </div>
  );
}
export default App;
