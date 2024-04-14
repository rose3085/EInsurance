import React from 'react';
import Finanical from './AdsImage/finanicalAds.png'
import SecurityAds from './AdsImage/ads.png';
import ImageSlider from './ImageSlider';
import Awareness from './AdsImage/Insurance-awareness.jpg'

function Ads(){
  

  const sliderImages=[
    Finanical,SecurityAds,Awareness
  ];
 

  return (
    <>
      <div className='bg-gray-100'>
        <div className='container mx-auto flex px-20 py-5 '>
          <div>
           <ImageSlider images={sliderImages} interval={2000}/>
          
          </div>

        </div>
      </div>
    </>
  )
}

export default Ads
