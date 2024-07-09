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
    bearerToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6Im5lcGFsQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiY2QwYmRlYmQtNjZiNy00NTdlLWJhOWUtYzgxYmExOTYwODUwIiwiZXhwIjoxNzIyNzQxMTk4LCJpc3MiOiJodHRwOi8vYWhtYWRtb3phZmZhci5uZXQiLCJhdWQiOiJodHRwOi8vYWhtYWRtb3phZmZhci5uZXQifQ.hN0QKT_QBdbwKoeV_IPVu3QpjhVfeQKG6Edpskoeh1U";
    console.log(bearerToken);
    var policyId = 1;
    

    useEffect(() => {
        // Call the backend
        const fetchData = async () => {
            if (userId && productId && transactionId && totalAmount) {
                try {
                    const response = await fetch('http://localhost:5262/payment/response', {
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
        <div>
            <h1>Payment Result</h1>
            <p>Status: {status}</p>
            <p>Transaction ID: {transactionId}</p>
            <p>Amount: {amount}</p>
            <p>Mobile: {mobile}</p>
            <p>Purchase Order ID: {purchaseOrderId}</p>
            <p>Purchase Order Name: {purchaseOrderName}</p>
            <p>Total Amount: {totalAmount}</p>
            {responseData && (
                <div>
                    <h2>Response Data</h2>
                    <pre>{JSON.stringify(responseData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default PaymentResult;
