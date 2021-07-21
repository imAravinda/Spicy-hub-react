import React,{useState} from 'react';
import { SliderData} from './SliderData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const ImageSlide = ({slides=SliderData}) => {
    const [current,setCurrent]=useState(0);
    const length = slides.length;
    
    const nextSlide = () => {
        setCurrent(current === length-1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1)
    }
    if(!Array.isArray(slides) || slides.length <= 0)
    {
        return null;
    }
    return (
        <div className="slider">
            <FontAwesomeIcon icon={faArrowLeft} className="left-arrow" onClick={prevSlide} />
            <FontAwesomeIcon icon={faArrowRight} className="right-arrow" onClick={nextSlide} />
            {slides.map((slide,index)=>{
                return(
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && <img src={slide.image} alt="" className="img"/>}
                    </div>
                )
            })}
        </div>
    )
}

export default ImageSlide
