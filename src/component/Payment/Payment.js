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
        <div className='font-serif '>
            <h2 className='text-2xl font-bold mb-6 flex justify-center  text-gray-600'>payment </h2>

            <div className=' flex justify-center items-center mt-12'>
                <div className=' w-2/3 p-4  border-solid border-2 border-sky-500'>
                    <p className='my-3'>car Price <strong>BDT {sellprice}</strong> Location <strong>{location}</strong>  </p>

                    <div >
                        <Elements stripe={stripePromise}>
                            <CheckoutForm
                                data={data}
                            />
                        </Elements>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Payment;