import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';
import '../Components/Slider.css';

const slideImages = [
  {
    url: slide1,
  },
  {
    url: slide2,
  },
  {
    url: slide3,
  },
];

const Slider = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div className = "slider-image" style={{ 'backgroundImage': `url(${slideImage.url})` }}>
                    <h2>Wolf Enterijeri</h2>
                    <p>Otkrijte naše jedinstvene kreacije i transformišite <br/>svoj dom u simbol stila i udobnosti.</p>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slider;