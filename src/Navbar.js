import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faInstagram,faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faBars,faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [click,setClick]=useState(false);
    const handleClick= () => setClick(!click);
    return ( 
        <div className="navbar">
            <nav>
                <h2>Spicy Hut</h2>
                <ul className={click ?"links active" : "links"}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Menu">Menu</Link></li>
                    <li><Link to="/About">About Us</Link></li>
                    <li><Link to="/">Contact Us</Link></li>
                </ul>
                <div className="icons"> 
                    <button ><FontAwesomeIcon icon={faFacebook}/></button>
                    <button><FontAwesomeIcon icon={faInstagram}/></button>
                    <button><FontAwesomeIcon icon={faTwitter}/></button>
                </div>
                <div className="menu" onClick={handleClick}>
                        <button><FontAwesomeIcon icon={click ? faTimes: faBars }/></button>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;