// import logo from './logo.svg';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-dom'
import Navbar from './components/navbar';
import GlobalStyle from './components/styled/globalStyles';

const App = () => {
  return (
    <>
    <GlobalStyle />
    <div className="App">
      <Navbar />
    </div>
    </>
  );
}

export default App;
