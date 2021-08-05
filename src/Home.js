import Aos from "aos";
import { Link } from "react-router-dom";
const Home = () => {
    Aos.init({duration:500})
    return (
        <div data-aos="fade-right" className="cover">
            <h1 >Spicy Hut</h1>
            <hr />
            <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, expedita.</p>
            <button className="ord" ><Link to="/Order" className="lin">Order Now</Link></button>
        </div>
     );
}
export default Home;