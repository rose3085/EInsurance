import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Spinner } from '@chakra-ui/react'
/*import { useNavigate } from 'react-router-dom';*/

const PaymentButton = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { register, handleSubmit } = useForm();
    /*const navigate = useNavigate();*/

    const initiatePayment = async (registerdata) => {
        setLoading(true);

        //const payload = {
        //    "customerName": "Ram",
        //    "amountInPaisa": "1000"



        //};
        setError('');
        try {
            const response = await fetch(`https://localhost:44361/payment/khalti`, {
                method: 'POST', // Use the appropriate method (POST, GET, etc.)
                headers: {
                    'Content-Type': 'application/json',
                    // Include any necessary headers here
                },
                body: JSON.stringify(registerdata),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                if (data.payment_url) {
                    window.location.href = data.payment_url;
                } else {
                    setError('Payment URL not found in response');
                }
            } else {
                setError('Failed to initiate payment');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred while initiating payment');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className='flex justify-center items-center '>
                <div className='w-1/2   '>
                    <div className='border-none flex justify-center items-center'>
                        <img src="https://ictframe.com/wp-content/uploads/Khalti-Logo-300x225.png" className='h-24'></img>
                    </div>
                    <div className='text-[20px]  font-medium font-sans flex justify-center items-center'> Khalti Digital Wallet</div>
                </div>
                </div>
        <div className='flex justify-center items-center '>
            <div className='w-1/2 m-12 border-2 bg-white  shadow-md rounded-md '>
                {/*<button onClick={initiatePayment} disabled={loading}>*/}
                {/*    {loading ? 'Processing...' : 'Initiate Payment'}*/}
                {/*</button>*/}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleSubmit(initiatePayment)}> 
                        <div className='h-20 w-full bg-[#5D2E8C] rounded-t-md'>
                        <div className='pt-8 pl-2 text-lg font-medium font-sans text-white'>
                            Fill Up User Details
                        </div>


                    </div>

                    <div className="px-3 py-6">


                        <div className="border-b border-gray-900/10 pb-2">

                            <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-full">
                                    <label htmlFor="customer-name" className="block text-base font-medium leading-3 text-gray-900 font-sans">User Name</label>
                                    <div className="mt-2">
                                        <input type="text" name="customer-name" id="customer-name" autoComplete="given-name" className="block px-2 text-base font-sans w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                                             ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none  focus:ring-[#0065ff] sm:text-sm sm:leading-6"  {...register("customerName")} />
                                    </div>
                                </div>



                                <div className="sm:col-span-full">
                                    <label htmlFor="Age" className="after:content-['*'] after:ml-1 after:text-red-500 block text-base font-medium leading-3 text-gray-900 font-sans">Amount in Paisa</label>
                                    <div className="mt-2">
                                        <input type="text" name="amountinpaisa" className="block px-2 text-base font-sans w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                                             ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none  focus:ring-[#0065ff] sm:text-sm sm:leading-6"  {...register("amountInPaisa")} />
                                    </div>
                                </div>
                    

                            </div>
                        </div>


                    </div>

                    <div className="m-2 flex items-center justify-end gap-x-6">

                        <button type="submit" className="inline-flex text-white bg-[#5D2E8C] border-0 py-2 px-6 focus:outline-none hover:bg-[#0EAA42] rounded text-lg">
                            {loading ? <Spinner
                                emptyColor='gray.200'
                                color='blue.500'
                            /> : 'Pay Via Khalti'}</button>
                    </div>

                </form>
            </div>
            </div>
        </>
    );
};

export default PaymentButton;
