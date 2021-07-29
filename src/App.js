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
import Aboutus from './About';
import Contact from './contact';
function App() {
  useEffect(() => {
    Aos.init({duration:1000});    
  }, [])
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <>
            <div className="content">
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
        <Route  exact path="/Menu">
          <div className="MenuPage" >
            <Menu />
          </div>
        </Route>
        <Route exact path="/About">
          <div className="aboutus">
            <Aboutus />
          </div>
        </Route>
        <Route exact path="/contact">
          <div className="contactus">
            <Contact />
          </div>
        </Route>
      </Switch>
      </div>      
  </Router>
  );
}

export default App;
