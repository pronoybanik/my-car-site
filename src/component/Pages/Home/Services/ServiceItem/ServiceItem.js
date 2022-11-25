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
                    <h2 className="card-title ">{title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-center">
                        <Link to={`/reviews/${_id}`}>
                            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white mr-3y">Detail</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;