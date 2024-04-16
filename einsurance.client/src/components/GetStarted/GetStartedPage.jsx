import React from 'react'
import SelectPlan from '../SelectPlan/SelectPlan'
import Ads from '../Ads/Ads'
import Advantages from '../Advantages/Advantages'
import Visit from '../Visit/Visit'
import CheckOut from '../CheckOut/CheckOut'
import { Link } from 'react-router-dom'

export default function GetStartedPage() {
  return (
    <>
      <div class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center leading-3 gap-0">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-4xl mb-4 font-medium text-gray-900 font-sans">Find Your Perfect Plan
              <br class="hidden lg:inline-block" />
            </h1>
            <p class="mb-8 leading-normal text-xl">Our platform allows you to compare various life insurance policies from top-rated companies effortlessly. Let's get started and find the perfect plan to protect your loved ones' future with <b className='text-[#0065ff]'> EInsurance</b>.</p>
            <Link to='/Questiondetails'>
              <div class="flex justify-center">
                <button class="inline-flex text-white bg-[#008a8a] border-0 py-2 px-6 focus:outline-none hover:bg-[#0EAA42] rounded text-lg">Get Started</button>

              </div>
            </Link>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-40">
            <img class="object-cover object-center rounded" alt="hero" src="https://images.pexels.com/photos/7688374/pexels-photo-7688374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </div>
        </div>
      </div>

      <SelectPlan />
      <Advantages />
      <Ads />
      <Visit />
      <CheckOut />


    </>
  )
}





