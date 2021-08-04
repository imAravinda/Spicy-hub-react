import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from './images/Rice.jpg'
import img2 from './images/Soup.jpg'
import img3 from './images/Noodles.jpg'
import img4 from './images/Pizza.jpg'
import img5 from './images/Dessert.jpg'
const Order = () => {
    return ( 
        <div className="Order">
            <h1 className="heading">Order Now</h1>
            <hr />
            <div className="Ofoods">
               <div className="card">
                   <div className="image">
                       <img src={img1} alt="" />
                   </div>
                   <div className="rest">
                       <h3>Fried Rice</h3>
                       <button className="Log">Order Now<FontAwesomeIcon icon ={faAngleDoubleRight} className="ordI"/></button>
                   </div>
               </div>
               <div className="card">
                   <div className="image">
                       <img src={img2} alt="" />
                   </div>
                   <div className="rest">
                       <h3>Soup</h3>
                       <button className="Log">Order Now<FontAwesomeIcon icon ={faAngleDoubleRight} className="ordI"/></button>
                   </div>
               </div>
               <div className="card">
                   <div className="image">
                       <img src={img3} alt="" />
                   </div>
                   <div className="rest">
                       <h3>Noodles</h3>
                       <button className="Log">Order Now<FontAwesomeIcon icon ={faAngleDoubleRight} className="ordI"/></button>
                   </div>
               </div>
               <div className="card">
                   <div className="image">
                       <img src={img4} alt="" />
                   </div>
                   <div className="rest">
                       <h3>Pizza</h3>
                       <button className="Log">Order Now<FontAwesomeIcon icon ={faAngleDoubleRight} className="ordI"/></button>
                   </div>
               </div>
               <div className="card">
                   <div className="image">
                       <img src={img5} alt="" />
                   </div>
                   <div className="rest">
                       <h3>Desserts</h3>
                       <button className="Log">Order Now<FontAwesomeIcon icon ={faAngleDoubleRight} className="ordI"/></button>
                   </div>
               </div>
            </div>
        </div>
     );
}
 
export default Order;