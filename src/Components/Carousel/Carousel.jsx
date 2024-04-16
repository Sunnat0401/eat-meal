import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import corusel1 from'../../assets/carusel1.jpg'
import corusel2 from'../../assets/carusel2.jpg'
import corusel3 from'../../assets/carusel3.jpg'

const MyCarousel = () => {
  return (
    <Carousel>
      <div>
        <img src={corusel1} alt="Image 1" />
      </div>
      <div>
        <img src={corusel2} alt="Image 2" />
      </div>
      <div>
        <img src={corusel3} alt="Image 3" />
        <p className="legend">Image 3</p>
      </div>
    </Carousel>
  );
};

export default MyCarousel;
