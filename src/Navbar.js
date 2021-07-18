import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faInstagram,faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faBars,faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Navbar = () => {
    const [click,setClick]=useState(false);
    const handleClick= () => setClick(!click);
    return ( 
        <div className="navbar">
            <nav>
                <h2>Spicy Hut</h2>
                <ul className={click ?"links active" : "links"}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Menu</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Contact Us</a></li>
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