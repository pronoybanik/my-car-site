import React from 'react';
import { FaMobileAlt, FaLocationArrow } from "react-icons/fa";

const Pages = ({ item }) => {
    const { location, name, number, photo, price } = item;
    return (
        <div>
            <div className="card  bg-base-100  h-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl w-80 h-48" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p className='font-semibold'>BDT {price}</p>
                    <p className='font-semibold'>This product will be sold.
                        <br /> Contact to buy?</p>
                    <p className='flex text-red-400'><FaLocationArrow></FaLocationArrow>Location: {location}</p>
                    <p className='flex text-red-400'><FaMobileAlt></FaMobileAlt>Number: {number}</p>
                </div>
            </div>
        </div>
    );
};

export default Pages;