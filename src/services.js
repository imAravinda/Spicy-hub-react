import ImageSlide from "./ImageSlide";
import img2 from "./images/days.jpg";
import { SliderData } from './SliderData';
const services = () => {
    return ( 
        <div className="services">
            <h1 className="title">Services</h1>
            <hr />
            <div className="take">
                <div className="text">
                    <h1>Takeaway</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ducimus natus vitae architecto error, corrupti dolore eveniet sunt delectus quidem eius illo, fuga ad alias nisi, tenetur voluptatum! Tempore quam quos sit explicabo dignissimos provident?</p>
                </div>
                <ImageSlide slides={SliderData}/>
            </div>
            <div className="parties">
                <img src={img2} alt="" />
                <div className="text">
                    <h1>Pre-Orders</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quasi fuga quo! Repellendus fuga eligendi aliquid. Nemo similique atque ad vel molestias, perferendis accusantium. Soluta, labore? Delectus nihil repudiandae hic similique aut explicabo, id quod?</p>
                </div>
            </div>
        </div>
     );
}
 
export default services;