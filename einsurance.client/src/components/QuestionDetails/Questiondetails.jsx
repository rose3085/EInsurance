import React, { useState } from 'react';
import { NepaliDatePicker } from "nepali-datepicker-reactjs"
import "nepali-datepicker-reactjs/dist/index.css"

function Questiondetails() {
    const [dateofbirth, setDateOfBirth] = useState ("")
    return (
        <>
            <div className='flex justify-center items-center '>
                <div className='w-1/2 m-12 border-2 bg-white  shadow-md rounded-md '>
                    <div className='h-20 w-full bg-[#008a8a] rounded-t-md'>
                        <div className='pt-2 pl-2 text-sm font-sans text-white'>
                            Type of Insurance
                        </div>
                        <select name="plans" className='h-8 w-60 m-2 rounded-sm text-lg'>
                            <option value="">Investment Plan</option>
                            <option value="">Child Plan</option>
                            <option value="">High return Plan</option>
                            <option value="">Life Insurance Plan</option>
                            <option value="">Health Insurance Plan</option>
                            <option value="">Vehicle Insurance Plan</option>
                        </select>
                    </div>
                    <form>
                        <div class="px-3 py-6">


                            <div class="border-b border-gray-900/10 pb-2">

                                <div class="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div class="sm:col-span-3">
                                        <label for="first-name" class="block text-base font-medium leading-3 text-gray-900 font-sans">User name</label>
                                        <div class="mt-2">
                                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block px-2 text-base font-sans w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                                             ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none  focus:ring-[#0065ff] sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="DOB" class="block text-sm font-medium leading-3 text-gray-900">Date of Birth</label>
                                        <div class="mt-2">
                                            <NepaliDatePicker inputClassName="form-control block px-2 text-base font-sans w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                                             ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none  focus:ring-[#0065ff] sm:text-sm sm:leading-6"
                                                className=""
                                                value={dateofbirth}
                                                onChange={(e) => setDateOfBirth(e.target.value)}
                                                options={{ calenderLocale: "ne", valueLocale: "en" }} />
                                            
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="Sum Assured" class="block text-base font-medium leading-3 text-gray-900 font-sans">Sum Assured</label>
                                        <div class="mt-2">
                                            <input type="number" name="sum-assured"  class="block px-2 text-base font-sans w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                                             ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none  focus:ring-[#0065ff] sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="Term" class="block text-base font-medium leading-3 text-gray-900 font-sans">Term</label>
                                        <div class="mt-2">
                                            <input type="number" name="term"  class="block px-2 text-base font-sans w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                                             ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none  focus:ring-[#0065ff] sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div class="col-span-full">
                                        <label for="paymentMode" class="block text-base font-medium leading-2 text-gray-900 font-sans">Payment Mode</label>
                                        <div class="mt-2">
                                            <select  class="block px-2 text-base font-sans w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                                             ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none  focus:ring-[#0065ff] sm:text-sm sm:leading-6">
                                                <option value="Half Yearly">Half Yearly</option>
                                                <option value="Yearly">Yearly</option>
                                                <option value="Quarterly">Quarterly</option>
                                                <option value="Monthly">Monthly</option>
                                            </select>
                                        </div>
                                    </div>

                                   

                                    
                                </div>
                            </div>

                            
                        </div>

                        <div class="m-2 flex items-center justify-end gap-x-6">
                           
                        <button type='submit' class="inline-flex text-white bg-[#008a8a] border-0 py-2 px-6 focus:outline-none hover:bg-[#0EAA42] rounded text-lg">Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Questiondetails
