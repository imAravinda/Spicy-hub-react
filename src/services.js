import img1 from "./images/take1.jpg";
import img2 from "./images/days.jpg"
const services = () => {
    return ( 
        <div className="services">
            <h1 className="title">Services</h1>
            <div className="take">
                <h1 className="topic">Takeaway</h1>
                <img src={img1} alt="" />
            </div>
            <div className="parties">
                <img src={img2} alt="" />
                <h1 className="topic">Pre-Orders</h1>
            </div>
        </div>
     );
}
 
export default services;