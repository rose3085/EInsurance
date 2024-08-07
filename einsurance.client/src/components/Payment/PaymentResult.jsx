import React, { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

const PaymentResult = () => {
    const [loading, setLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);
    const [responseData, setResponseData] = useState(null);

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
    const userId = 1;  // Assuming userId is a constant or retrieved from context/state
    const productId = 1;  // Assuming productId is a constant or retrieved from context/state


    const token = Cookies.get('token');
    var bearerToken = `Bearer ${token}`;
   // bearerToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6Im5lcGFsQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiY2QwYmRlYmQtNjZiNy00NTdlLWJhOWUtYzgxYmExOTYwODUwIiwiZXhwIjoxNzIyNzQxMTk4LCJpc3MiOiJodHRwOi8vYWhtYWRtb3phZmZhci5uZXQiLCJhdWQiOiJodHRwOi8vYWhtYWRtb3phZmZhci5uZXQifQ.hN0QKT_QBdbwKoeV_IPVu3QpjhVfeQKG6Edpskoeh1U";
   // console.log(bearerToken);
    var policyId = 1;
    

    useEffect(() => {
        // Call the backend
        const fetchData = async () => {
            if (userId && productId && transactionId && totalAmount) {
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
                            totalAmount,
                            policyId
                        }),
                    });

                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }

                    const data = await response.json();
                    setIsSuccess(data.isSuccess);  // Assuming the response has an isSuccess field
                    setResponseData(data);
                    setLoading(false);
                    console.log('Backend response:', data);
                } catch (error) {
                    console.error('Error calling backend:', error);
                    setLoading(false);
                }
            } else {
                console.error('Missing required parameters');
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this runs only once

    // Render the payment result information
    if (loading) {
        return <div>Loading...</div>;
    }

    if (!isSuccess) {
        return <div>Payment failed. Please try again.</div>;
    }

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
                                <label htmlFor="Transaction ID" className=" block text-base font-medium leading-3 text-gray-500 font-sans">Transaction ID:</label>
                                <div className="mt-2 text-lg font-bold">
                                    {transactionId}
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="Amount" className=" block text-base font-medium leading-3 text-gray-500 font-sans">Amount:</label>
                                <div className="mt-2 text-lg font-bold">
                                    {amount}
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
                                <label htmlFor="Purchase Order Name" className=" block text-base font-medium leading-3 text-gray-500 font-sans">Purchase Order Name:</label>
                                <div className="mt-2 text-lg font-bold">
                                    {purchaseOrderName}
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
