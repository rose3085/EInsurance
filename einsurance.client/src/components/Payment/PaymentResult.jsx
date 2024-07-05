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
    const userId = 1;  // Assuming userId is a constant or retrieved from context/state
    const productId = 1;  // Assuming productId is a constant or retrieved from context/state

    const token = Cookies.get('token');
    const bearerToken = `Bearer ${token}`;

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
        <div>
            <h1>Payment Result</h1>
           
            <p>Status: {status}</p>
            <p>Transaction ID: {transactionId}</p>
            
            <p>Amount: {amount}</p>
            <p>Mobile: {mobile}</p>
            <p>Purchase Order ID: {purchaseOrderId}</p>
            <p>Purchase Order Name: {purchaseOrderName}</p>
            <p>Total Amount: {totalAmount}</p>
        </div>
    );
};

export default PaymentResult;
