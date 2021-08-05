import './App.css';
import Navbar from './Navbar'; 
import Home from './Home';
import Services from './services';

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Menu from './Menu';
import Aboutus from './About';
import Contact from './contact';
import Form from './Form';
import Order from './Order';
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
              <Form />
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
        <Route exact path="/Order">
          <div data-aos="fade-up" className="OrderNow">
            <Order />
          </div>
        </Route>
      </Switch>
      </div>      
  </Router>
  );
}

export default App;
