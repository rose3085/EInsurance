import React from 'react'
import Reliable from './Icons/reliable.png'

function Advantages() {
    return (
        <>
            <div class="text-gray-600 body-font mt-20">
                <div class="flex flex-col text-left w-full ">
                    <h1 class="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-900 font-sans px-14 "><b className='text-[#0065ff]'>EInsurance</b> Features</h1>
                </div>
                <div class="container px-5 py-10 mx-auto flex flex-wrap">
                    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <img alt="feature" class="object-cover object-center h-full w-full" src="https://images.pexels.com/photos/7735630/pexels-photo-7735630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </div>
                    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div class="flex flex-col mb-10 lg:items-start items-center ">
                            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#0065ff] mb-3">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-xl title-font font-sans font-semibold mb-2">Discover the perfect insurance coverage</h2>
                                <p class=" text-lg leading-normal">Our platform offers an easy-to-use comparison tool, providing transparent insights into various policies from top insurers.</p>

                            </div>
                        </div>
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#0065ff] mb-3">
                                <img src={Reliable} alt="" />
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-xl title-font font-sans font-semibold mb-2">Reliable</h2>
                                <p class=" text-lg leading-normal">Save time and money by finding the best prices tailored to your needs</p>

                            </div>
                        </div>
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#0065ff] mb-3">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-xl title-font font-sans font-semibold mb-2">Simple and User-friendly</h2>
                                <p class=" text-lg leading-normal font-normal ">Explore, compare, and secure your ideal policy hassle-free!</p>

                            </div>
                        </div>
                        
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default Advantages
