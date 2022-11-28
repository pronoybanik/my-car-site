import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = ({ data }) => {
    // console.log(data);
    const { _id, image_url, title } = data; 
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='w-full h-52' src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-serif">{title}</h2>
                    <p className='font-semibold font-serif'>That Products are sale</p>
                    <div className="card-actions justify-center">
                        <Link to={`/reviews/${_id}`}>
                            <button className="font-mono font-bold btn btn-primary bg-gradient-to-r from-primary to-secondary text-white mt-2">Detail</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;