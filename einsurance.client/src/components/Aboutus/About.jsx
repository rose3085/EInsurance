import React from 'react';

function About() {
  return (
      <div className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center leading-3 gap-0">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-gray-900 font-sans">Welcome to Our Website
                      <br className="hidden lg:inline-block" />
                  </h1>
                  <p className="mb-8 leading-normal text-xl"> <b className='text-[#0065ff]'> EInsurance</b> serve as valuable tools for individuals seeking to evaluate various life insurance options available in the market. These platforms typically allow users to compare policies from different insurance providers based on factors such as coverage amount, premium rates, policy terms, and additional benefits.</p>
                  
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-40">
                  <img className="object-cover object-center rounded" alt="hero" src="https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </div>
          </div>
      </div>
  );
}

export default About;