import ImageSlide from "./ImageSlide";
import { SliderData } from './SliderData';
import { SliderData1 } from "./SliderData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlackTie} from "@fortawesome/free-brands-svg-icons";
import { faBirthdayCake,faGlassMartiniAlt, faIceCream, faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
const services = () => {
    return ( 
        <div className="services">
            <h1 className="title">Services</h1>
            <hr />
            <div className="take">
                <div className="text">
                    <h1>Takeaway</h1><br />
                    <div className="party">
                        <h2>Main Meals</h2>
                        <div className="des">
                            <FontAwesomeIcon icon={faPizzaSlice} className="icon"/>
                            <p>We offer the best main meals for you to your breakfast,lunch & dinner. come and get your meal from us and make your tounge delicious.</p>
                        </div>
                    </div>
                    <div className="party">
                        <h2>Desserts</h2>
                        <div className="des">
                            <FontAwesomeIcon icon={faIceCream} className="icon"/>
                            <p>We offer the best desserts for you to your breakfast,lunch & dinner. come and get your dessert from us and make your tounge delicious.</p>
                        </div>
                    </div>
                </div>
                <ImageSlide slides={SliderData} autoPlay={3} className="slide1"/>
            </div>
            <hr />
            <div className="parties">
                <div className="text">
                    <h1>Parties</h1><br />
                    <div className="party">
                        <h2>Weddings</h2>
                        <div className="des">
                            <FontAwesomeIcon icon={faBlackTie} className="icon"/>
                            <p>Book us for youy special day and Make your special day with more special with us. We do our best service for satisfy you and make your day unfrogetable</p>
                        </div>
                    </div>
                    <div className="party">
                        <h2>Birthdays</h2>
                        <div className="des">
                            <FontAwesomeIcon icon={faBirthdayCake} className="icon"/>
                            <p>Book a table for two with the best spicy dishes served for the birthday. Or reserve a bigger one for a huge family to get together. Gather your friends together </p>
                        </div>
                    </div>
                    <div className="party">
                        <h2>Anniversaries</h2>
                        <div className="des">
                            <FontAwesomeIcon icon={faGlassMartiniAlt} className="icon"/>
                            <p>Book us to make your anniversary party or your get together party with spicy foods and make that day within unfrogetable memories. </p>
                        </div>
                    </div>
                </div>
                <ImageSlide slides={SliderData1} autoPlay={3} className="slide2"/>
            </div>
            <hr />
        </div>
     );
}
 
export default services;