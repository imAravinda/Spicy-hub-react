import './App.css';
import Navbar from './Navbar'; 
import Home from './Home';
import Services from './services';
import SignIn from './SignIn';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Menu from './Menu';
function App() {
  useEffect(() => {
    Aos.init({duration:1000});    
  }, [])
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div data-aos="fade-up">
      <Switch>
        <Route exact path="/">
          <>
            <div data-aos="fade-up" className="content">
              <Home />
            </div>
            <div data-aos="fade-up" className="serv">
              <Services/>
            </div>
            <div data-aos="fade-up" className="reg">
              <SignIn />
            </div>
          </>
        </Route>
        <Route>
          <div className="MenuPage">
            <Menu path="/Menu" />
          </div>
        </Route>
      </Switch>
      </div>      
    </div>
  </Router>
  );
}

export default App;
