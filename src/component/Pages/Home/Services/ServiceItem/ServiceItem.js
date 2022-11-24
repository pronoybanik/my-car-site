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
                            <button className="btn btn-primary">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;