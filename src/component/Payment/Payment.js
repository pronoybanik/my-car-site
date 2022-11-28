import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE);
const Payment = () => {
    const data = useLoaderData()
    const { location, sellprice } = data;
    // console.log(data);


    return (
        <div className='font-serif'>
            <h2 className='text-2xl font-bold'>payment: {data.name}</h2>
            <p >car Price <strong>BDT {sellprice}</strong> Location <strong>{location}</strong>  </p>

           <div className='w-1/2'>
           <Elements stripe={stripePromise}>
                <CheckoutForm 
                data={data}
                />
            </Elements>
           </div>
        </div>
    );
};

export default Payment;