import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Model from '../Model/Model';


const Review = () => {
    const data = useLoaderData()
    const { image_url, title, location, sellprice, productuse, sellname, realprice } = data;

    const [carBooking, setCarBooking] = useState(null);

    return (
        <div>

            <div className="hero ">
                <div className="hero-content font-serif flex-col lg:flex-row">

                    <figure><img className='w-96' src={image_url} alt="Shoes" /></figure>
                    <div>
                        <h1 className="text-5xl font-bold ">{title}</h1>
                        <br />
                        <h2 className='font-bold'>seller Name: {sellname}</h2>
                        <h3 >Location: {location}</h3> 
                        <h2>Uses: {productuse}</h2>
                        <h2 >Market Price:  <strong className='text-red-500'>BDT-{realprice}</strong>  </h2>
                        <h2 >selling Price: <strong className='text-red-500'>BDT-{sellprice}</strong></h2>

                        <label onClick={() => setCarBooking(data)} htmlFor="car-booking" className=" font-bold btn btn-primary bg-gradient-to-r from-primary to-secondary text-white mt-2 btn-sm">Booking</label>

                    </div>
                </div>
            </div>

            {
                carBooking &&
                <Model
                    carBooking={carBooking}
                    setCarBooking={setCarBooking}
                ></Model>} 

        </div>
    );
};

export default Review;