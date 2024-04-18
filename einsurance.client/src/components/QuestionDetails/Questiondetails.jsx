import React, { useState } from 'react';
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";

function Questiondetails() {
    const [dateofbirth, setDateOfBirth] = useState("");
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async (event) => {
        event.preventDefault();
        try {
            setLoading(true);
            const requestBody = {
                "policyType": "Investment Plan", // Example value
                "age": 30, // Example value
                "terms": 10, // Example value
                "maturityBenefits": true, // Example value
                "paymentMode": "Yearly", // Example value
                "coverAmount": 1000000 // Example value
            };
         //   debugger;
            const response = await fetch('http://localhost:5262/policy/filter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };


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
                        <div className="px-3 py-6">


                            <div className="border-b border-gray-900/10 pb-2">

                                <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-base font-medium leading-3 text-gray-900 font-sans">User name</label>
                                        <div className="mt-2">
                                            <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block px-2 text-base font-sans w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                                             ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none  focus:ring-[#0065ff] sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="DOB" className="block text-sm font-medium leading-3 text-gray-900">Date of Birth</label>
                                        <div className="mt-2">
                                            <NepaliDatePicker inputclassName="form-control block px-2 text-base font-sans w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                                             ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none  focus:ring-[#0065ff] sm:text-sm sm:leading-6"
                                                className=""
                                                value={dateofbirth}
                                                onChange={(e) => setDateOfBirth(e.target.value)}
                                                options={{ calenderLocale: "ne", valueLocale: "en" }} />

                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="Sum Assured" className="block text-base font-medium leading-3 text-gray-900 font-sans">Sum Assured</label>
                                        <div className="mt-2">
                                            <input type="number" name="sum-assured" className="block px-2 text-base font-sans w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                                             ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none  focus:ring-[#0065ff] sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="Term" className="block text-base font-medium leading-3 text-gray-900 font-sans">Term</label>
                                        <div className="mt-2">
                                            <input type="number" name="term" className="block px-2 text-base font-sans w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                                             ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none  focus:ring-[#0065ff] sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <label htmlFor="paymentMode" className="block text-base font-medium leading-2 text-gray-900 font-sans">Payment Mode</label>
                                        <div className="mt-2">
                                            <select className="block px-2 text-base font-sans w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
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

                        <div className="m-2 flex items-center justify-end gap-x-6">

                            <button type='submit' onClick={fetchData} className="inline-flex text-white bg-[#008a8a] border-0 py-2 px-6 focus:outline-none hover:bg-[#0EAA42] rounded text-lg">Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Questiondetails;
