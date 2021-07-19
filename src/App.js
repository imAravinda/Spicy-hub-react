import './App.css';
import Navbar from './Navbar'; 
import Home from './Home';
import Services from './services';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      <div className="serv">
        <Services/>
      </div>
    </div>
  );
}

export default App;
