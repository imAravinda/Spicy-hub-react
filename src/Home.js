import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="cover">
            <h1>Spicy Hut</h1>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, expedita.</p>
            <button className="ord"><Link to="/Order" className="lin">Order Now</Link></button>
        </div>
     );
}
 
export default Home;