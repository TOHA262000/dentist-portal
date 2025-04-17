import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
const CheckoutForm = ({ booking }) => {
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [sucsess, setSucsess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    useEffect(() => {
        fetch("https://dentist-portal-server.vercel.app/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(booking),
            credentials: 'include'
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [booking]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setCardError(error.message);
        }
        else {
            setCardError('');
            console.log("PaymentMethod:",paymentMethod)
        }
        setSucsess('');
        setTransactionId('');
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: booking.patientName,
                        email: booking.email
                    },
                },
            },
        );
        if (paymentIntent.status === "succeeded") {
            setSucsess('Congrats! Your payment is successful');
            setTransactionId(paymentIntent.id);
        }
        if(confirmError){
            setCardError(confirmError.message);
            return;
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className='btn btn-sm btn-primary mt-8' type="submit"
                    disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            <p className='text-red-500'>{cardError}</p>
            {sucsess &&
                <div>
                    <p className='text-green-500'>{sucsess}</p>
                    <p>Your transaction id is: <span className='font-bold'>{transactionId}</span></p>
                </div>}
        </>
    );
};

export default CheckoutForm;