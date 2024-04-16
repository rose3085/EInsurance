import React from 'react';
import LifeInsurance from './selectPlanIcons/life-insurance.png';
import HealthInsurance from './selectPlanIcons/health-insurance.png';
import SaveMoney from './selectPlanIcons/save-money.png';
import HomeInsurance from './selectPlanIcons/protection.png';
import VehicleInsurance from './selectPlanIcons/safe.png';

function SelectPlan() {
    return (
        <>
            <div class="text-gray-600 body-font bg-[#DAEBFB]">
                <div class="container px-5 py-12 mx-auto">
                    <div class="flex flex-col text-center w-full mb-16">
                        <h1 class="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-900 font-sans">What are you Looking For?</h1>
                        <p class="lg:w-30 mx-auto leading-normal text-lg tracking-tight font-mono font-medium ">Select Type of Insurance you want</p>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        <div class="lg:w-64 sm:w-1/2  p-2 cursor-pointer">
                            <div class="flex relative">
                                <div class="px-4 py-5 relative z-10 w-full border-2 rounded-md  bg-white hover:border-[#0065ff]">
                                    <img src={LifeInsurance} alt="life-insurance icon" className='h-20 w-32' />
                                    <h1 class="title-font text-xl font-medium text-gray-900 mb-1 mt-2">Life Insurance Plans</h1>

                                </div>
                            </div>
                        </div>
                        <div class="lg:w-64 sm:w-1/2 p-2 cursor-pointer">
                            <div class="flex relative">
                                <div class="px-4 py-5 relative z-10 w-full border-2 rounded-md  bg-white hover:border-[#0065ff]">
                                    <img src={HomeInsurance} alt="Non-life-insurance icon" className='h-20 w-32' />
                                    <h1 class="title-font text-xl font-medium text-gray-900 mb-1 mt-2">Non-Life Insurance</h1>

                                </div>
                            </div>
                        </div>
                        <div class="lg:w-60 sm:w-1/2 p-2 cursor-pointer">
                            <div class="flex relative">
                                <div class="px-4 py-5 relative z-10 w-full border-2 rounded-md  bg-white hover:border-[#0065ff]">
                                    <img src={VehicleInsurance} alt="Vehicle insurance icon" className='h-20 w-32' />
                                    <h1 class="title-font text-xl font-medium text-gray-900 mb-1 mt-2">Vehicle Insurance</h1>

                                </div>
                            </div>
                        </div>
                        <div class="lg:w-64 sm:w-1/2 p-2 cursor-pointer">
                            <div class="flex relative">
                                <div class="px-4 py-5 relative z-10 w-full border-2 rounded-md  bg-white hover:border-[#0065ff]">
                                    <img src={HealthInsurance} alt="Health insurance icon" className='h-20 w-32' />
                                    <h1 class="title-font text-xl font-medium text-gray-900 mb-1 mt-2">Health Insurance</h1>

                                </div>
                            </div>
                        </div>
                        <div class="lg:w-64 sm:w-1/2 p-2 cursor-pointer">
                            <div class="flex relative">
                                <div class="px-4 py-5 relative z-10 w-full border-2 rounded-md  bg-white hover:border-[#0065ff]">
                                    <img src={SaveMoney} alt=" high return icon" className='h-20 w-32' />
                                    <h1 class="title-font text-xl font-medium text-gray-900 mb-1 mt-2">High Return</h1>

                                </div>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelectPlan
