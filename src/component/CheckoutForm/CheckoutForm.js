import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ data }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [displayError, setDisplayError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');
    const { sellprice, email, name, _id } = data;


    useEffect(() => {
        fetch("https://car-server-site.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authoriZation: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ sellprice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [sellprice]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log(error);
            setDisplayError(error.message);
        }
        else {
            setDisplayError('');
        }
        setSuccess('');
        // setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    }
                }
            }
        );

        if (confirmError) {
            setDisplayError(confirmError.message);
            return;
        }

        console.log(paymentIntent);

        if (paymentIntent.status === 'succeeded') {
            // setSuccess('Congrats! your payment completed');
            // setTransactionId(paymentIntent.id);


            const payment = {
                sellprice,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id
            }

            fetch('https://car-server-site.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        setSuccess('Congrats! your payment completed');
                        setTransactionId(paymentIntent.id);
                    }

                })
        }
        setProcessing(false);
    }


    return (
        <div>
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
                    className="font-mono btn-sm font-bold btn btn-primary bg-gradient-to-r from-primary to-secondary text-white my-3"
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className='text-xl text-rose-500'>{displayError}</p>
            {
                success && <>
                    <p className='text-green-500'>{success}</p>
                    <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
                </>
            }
        </div>
    );
};

export default CheckoutForm;