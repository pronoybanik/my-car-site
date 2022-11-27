import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CarDetails = () => {
    const data = useLoaderData()
    const { img, image_url, title, details } = data
    return (
        <div>
            <div className="hero ">
                <div className="hero-content font-serif">
                    <div>
                        <h3 className='text-3xl font-bold mb-6'>{title}</h3>
                        <img className='w-full h-96 ' src={img} alt="" />
                        <p className="py-6 text-2xl ">{details}</p>
                        <img className='w-full mt-6 h-96' src={image_url} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;