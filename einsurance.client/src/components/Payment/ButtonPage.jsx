import React from 'react';
//import CryptoJS from 'crypto-js';

const ButtonPage = () => {
    const handleClick = async () => {
        const message = "total_amount=100,transaction_uuid=11-201-13,product_code=EPAYTEST";
        const secret = "8gBm/:&EnhH.1/q";
        const hash = CryptoJS.HmacSHA256(message, secret);
        const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

        console.log(hashInBase64);

        const payload = {
            "amount": "100",
            "failure_url": "https://google.com",
            "product_delivery_charge": "0",
            "product_service_charge": "0",
            "product_code": "EPAYTEST",
            "signature": hashInBase64,
            "signed_field_names": "total_amount,transaction_uuid,product_code",
            "success_url": "https://esewa.com.np",
            "tax_amount": "0",
            "total_amount": "0",
            "transaction_uuid": "11-201-13"
        };

        console.log('Payload:', payload);  // Log the payload for debugging

        try {
            const response = await fetch('https://rc-epay.esewa.com.np/api/epay/main/v2/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Network response was not ok: ${response.status} - ${response.statusText} - ${errorText}`);
            }

            const data = await response.json();
            console.log('API Response:', data);
            alert('API call successful!');
        } catch (error) {
            console.error('Error during API call:', error);
            alert(`API call failed: ${error.message}`);
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
                Click Me
            </button>
        </div>
    );
};

export default ButtonPage;
