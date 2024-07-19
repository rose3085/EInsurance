import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

const PaymentResult = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const pidx = queryParams.get('pidx');
    const status = queryParams.get('status');
    const transactionId = queryParams.get('transaction_id');
    const tidx = queryParams.get('tidx');
    const amount = queryParams.get('amount');
    const mobile = queryParams.get('mobile');
    const purchaseOrderId = queryParams.get('purchase_order_id');
    const purchaseOrderName = queryParams.get('purchase_order_name');
    const totalAmount = queryParams.get('total_amount');
   // const userId = 1;  // Assuming userId is a constant or retrieved from context/state
  //  const productId = 1;  // Assuming productId is a constant or retrieved from context/state

    const token = Cookies.get('token');
    const productId = Number(Cookies.get('policyId'));
    const userName = Cookies.get('userName');
    console.log(productId);
    var currentDate = new Date();
    currentDate = currentDate.toISOString().split('T')[0];

    //const token = Cookies.get('');

    const bearerToken = `Bearer ${token}`;

    useEffect(() => {
        // Call the backend
        const fetchData = async () => {
            if ( productId && transactionId && totalAmount) {
                try {
                    const response = await fetch(`https://localhost:44361/payment/response`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': bearerToken,
                        },
                        body: JSON.stringify({

                            productId,
                            transactionId,
                            totalAmount
                        }),
                    });

                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }

                    const data = await response.json();
                    console.log('Backend response:', data);
                } catch (error) {
                    console.error('Error calling backend:', error);
                }
            } else {
                console.error('Missing required parameters');
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this runs only once

    // Render the payment result information
    return (
        <div className='flex justify-center items-center '>
            <div className='w-1/2 m-12 border-2 bg-white  shadow-md rounded-md '>
                <div className='h-20 w-full bg-[#5D2E8C] rounded-t-md'>
                    <div className='pt-8 pl-2 text-lg font-sans font-medium text-white'>
                        Payment Result
                    </div>
                </div>
                <div className="px-3 py-6">
                    <div className="border-b border-gray-900/10 pb-2">
                        <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="Status" className="block text-base font-medium leading-3 text-gray-500 font-sans">Status:</label>
                                <div className="mt-2 text-lg font-bold">
                                    {status}
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="Purchase Order Name" className=" block text-base font-medium leading-3 text-gray-500 font-sans">Purchase Made By:</label>
                                <div className="mt-2 text-lg font-bold">
                                    {userName}
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="Transaction ID" className=" block text-base font-medium leading-3 text-gray-500 font-sans">Transaction ID:</label>
                                <div className="mt-2 text-lg font-bold">
                                    {transactionId}
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="Amount" className=" block text-base font-medium leading-3 text-gray-500 font-sans">Purchased Date:</label>
                                <div className="mt-2 text-lg font-bold">
                                    {currentDate}
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="Mobile" className=" block text-base font-medium leading-3 text-gray-500 font-sans">Mobile:</label>
                                <div className="mt-2 text-lg font-bold">
                                    {mobile}
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="Purchase Order ID" className=" block text-base font-medium leading-3 text-gray-500 font-sans">Purchase Order ID:</label>
                                <div className="mt-2 text-lg font-bold">
                                    {purchaseOrderId}
                                </div>
                            </div>
                            
                            <div className="sm:col-span-3">
                                <label htmlFor="Total Amount" className=" block text-base font-medium leading-3 text-gray-500 font-sans">Total Amount:</label>
                                <div className="mt-2 text-lg font-bold">
                                    {totalAmount}
                                </div>
                            </div>



                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PaymentResult;
