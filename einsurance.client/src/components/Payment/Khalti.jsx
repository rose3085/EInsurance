import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useResponse } from '../../context/ResponseContext';
import { useNavigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';


const PaymentButton = () => {
    const location = useLocation();
    const { minCover, policyName } = location.state || {};
    const [loading, setLoading] = useState(false);
    const { responseData } = useResponse();
    const [error, setError] = useState('');
    const { register, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [policyData, setPolicyData] = useState(null);
    var userName = Cookies.get("userName");
    console.log(policyName);


    const initiatePayment = async (registerData) => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch(`https://localhost:44361/payment/khalti`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registerData),
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
            <div className='flex justify-center items-center'>
                <div className='w-1/2'>
                    <div className='border-none flex justify-center items-center'>
                        <img src="https://ictframe.com/wp-content/uploads/Khalti-Logo-300x225.png" className='h-24' alt="Khalti Logo" />
                    </div>
                    <div className='text-[20px] font-medium font-sans flex justify-center items-center'> Khalti Digital Wallet</div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className='w-1/2 m-12 border-2 bg-white shadow-md rounded-md'>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <form onSubmit={handleSubmit(initiatePayment)}>
                        <div className='h-20 w-full bg-[#5D2E8C] rounded-t-md'>
                            <div className='pt-8 pl-2 text-lg font-medium font-sans text-white'>
                                Verify The Details
                            </div>
                        </div>
                        <div className="px-3 py-6">
                            <div className="border-b border-gray-900/10 pb-2">
                                <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-full">
                                        <label htmlFor="customer-name" className="block text-base font-medium leading-3 text-gray-900 font-sans">User Name</label>
                                        <div className="mt-2">
                                            <input type="text" name="customer-name" id="customer-name"
                                                defaultValue={userName} // Populate with minCover value
                                                readOnly
                                                // autoComplete="given-name"
                                                className="block px-2 text-base font-sans w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                                                ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-[#0065ff] sm:text-sm sm:leading-6" {...register("customerName")} />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-full">
                                        <label htmlFor="customer-name" className="block text-base font-medium leading-3 text-gray-900 font-sans">Policy Name</label>
                                        <div className="mt-2">
                                            <input type="text" name="policy-name" id="policy-name"
                                                defaultValue={policyName} // Populate with minCover value
                                                readOnly
                                                // autoComplete="given-name"
                                                className="block px-2 text-base font-sans w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                                                ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-[#0065ff] sm:text-sm sm:leading-6" {...register("PolicyName")} />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-full">
                                        <label htmlFor="amount-in-paisa" className="block text-base font-medium leading-3 text-gray-900 font-sans">Amount in Paisa</label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="amount-in-paisa"
                                                className="block px-2 text-base font-sans w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-[#0065ff] sm:text-sm sm:leading-6"
                                                defaultValue={minCover} // Populate with minCover value
                                                readOnly // Prevent direct user input
                                                {...register("amountInPaisa")}
                                            />
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="m-2 flex items-center justify-end gap-x-6">
                            <button type="submit" className="inline-flex text-white bg-[#5D2E8C] border-0 py-2 px-6 focus:outline-none hover:bg-[#0EAA42] rounded text-lg">
                                {loading ? <Spinner emptyColor='gray.200' color='blue.500' /> : 'Pay Via Khalti'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default PaymentButton;
