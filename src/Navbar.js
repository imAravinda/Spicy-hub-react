import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faInstagram,faTwitter} from '@fortawesome/free-brands-svg-icons'
const Navbar = () => {
    return ( 
            <nav>
                <div className="links">
                    <h2>Spicy Hut</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Contact Us</a></li>
                    </ul>
                </div>
                <div className="socialMedia-icons">
                   <button><FontAwesomeIcon icon={faFacebook}/></button>
                   <button><FontAwesomeIcon icon={faInstagram}/></button>
                   <button><FontAwesomeIcon icon={faTwitter}/></button>
                </div>
            </nav>
     );
}
 
export default Navbar;