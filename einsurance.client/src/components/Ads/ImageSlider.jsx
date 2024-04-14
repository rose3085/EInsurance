import React, { useState, useEffect } from 'react';
import RightArrow from './AdsImage/right-arrow.png';
import LeftArrow from './AdsImage/left-Arrow.png';

const ImageSlider = ({ images, interval = 2000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [images.length, interval]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + images.length - 1) % images.length);
  };

  return (
    <div className="image-slider ">
      <div className='flex justify-center items-end ml-80'>
      <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} className='h-52 w-full mr-6 rounded-md'/>
      
      </div>
      <div className='flex items-center'>
      <div className='flex ml-80' onClick={prevSlide}>
      <img src={LeftArrow} className='h-6 cursor-pointer' alt="" srcset="" />
      <button  >Prev</button>
      </div>
      <div className='flex ml-72' onClick={nextSlide}>
      <img src={RightArrow} className='h-8 cursor-pointer' alt="" srcset="" />
      <button>Next</button>
      </div>
      </div>
      
    </div>
  );
};

export default ImageSlider;
