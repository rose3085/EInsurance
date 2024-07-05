import React, { useState } from 'react';

const PaymentButton = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const initiatePayment = async () => {
        setLoading(true);

        const payload = {
            "customerName":"Ram",
            "amountInPaisa": "1000"

            
            
        };
        setError('');
        try {
            const response = await fetch('http://localhost:5262/payment/khalti', {
                method: 'POST', // Use the appropriate method (POST, GET, etc.)
                headers: {
                    'Content-Type': 'application/json',
                    // Include any necessary headers here
                },
                body: JSON.stringify(payload),
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
        <div>
            <button onClick={initiatePayment} disabled={loading}>
                {loading ? 'Processing...' : 'Initiate Payment'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default PaymentButton;
