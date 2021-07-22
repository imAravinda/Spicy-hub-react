import './App.css';
import Navbar from './Navbar'; 
import Home from './Home';
import Services from './services';
import SignIn from './SignIn';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    Aos.init({duration:1000});    
  }, [])
  return (
    <div className="App">
      <Navbar />
      <div data-aos="fade-up" className="content">
        <Home />
      </div>
      <div data-aos="fade-up" className="serv">
        <Services/>
      </div>
      <div data-aos="fade-up" className="reg">
        <SignIn />
      </div>
    </div>
  );
}

export default App;
