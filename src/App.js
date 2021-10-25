// import logo from './logo.svg';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";
import GlobalStyle from "./components/styled/globalStyles";
import About from "./pages/about-us/about";
import Contact from "./pages/contact/contact";
import Home from "./pages/home/home";
import Market from "./pages/market/market";

const App = () => {
  return (
    <>
      <div className="App">
        <GlobalStyle />
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about-us" exact component={About}></Route>
            <Route path="/market" exact component={Market}></Route>
            <Route path="/contact" exact component={Contact}></Route>
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
