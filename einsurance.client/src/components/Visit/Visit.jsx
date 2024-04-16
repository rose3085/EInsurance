import React from 'react'
import Arrow from './PointsIcon/right-arrow.png';

function Visit() {
  return (
    <>
      <div  className='flex flex-row  w-full m-12'>
        <div>
          <div className='sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-900 font-sans px-14 tracking-tight'>How to connect with <b className='text-[#0065ff]'> E-Insurance?</b></div>
          <div className='flex items-center justify-left font-sans font-medium mt-4 ml-12 text-xl' >
            <div ><img src={Arrow} alt="" className='h-10' /></div>
            <div className='text-gray-500'>Visit us Online</div>
          </div>
          <div className='flex items-center justify-left font-sans font-medium  ml-12 text-xl' >
            <div ><img src={Arrow} alt="" className='h-10' /></div>
            <div className='text-gray-500'>Compare the prices and returns of different insurance plans</div>
          </div>
          <div className='flex items-center justify-left font-sans font-medium  ml-12 text-xl' >
            <div ><img src={Arrow} alt="" className='h-10' /></div>
            <div className='text-gray-500'>Choose the best insurance plans</div>
          </div>
          <div className='flex items-center justify-left font-sans font-medium mb-4 ml-12 text-xl' >
            <div ><img src={Arrow} alt="" className='h-10' /></div>
            <div className='text-gray-500'>Sign in</div>
          </div>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='h-60 w-96 rounded-lg ml-60' />
        </div>
      </div>
    </>
  )
}

export default Visit
