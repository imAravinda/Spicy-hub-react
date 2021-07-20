import ImageSlide from "./ImageSlide";
import { SliderData } from './SliderData';
import { SliderData1 } from "./SliderData";
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
                <ImageSlide slides={SliderData} className="slide1"/>
            </div>
            <hr />
            <div className="parties">
                <div className="text">
                    <h1>Parties</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quasi fuga quo! Repellendus fuga eligendi aliquid. Nemo similique atque ad vel molestias, perferendis accusantium. Soluta, labore? Delectus nihil repudiandae hic similique aut explicabo, id quod?</p>
                </div>
                <ImageSlide slides={SliderData1} className="slide2"/>
            </div>
        </div>
     );
}
 
export default services;