import React from 'react';
import { Link } from 'react-router-dom';

const Cars = ({ item }) => {
    const { title, img, _id } = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img className='w-full' src={img} alt="Shoes " /></figure>
                <div className="card-body mt-24">
                    <h2 className="card-title font-serif text-white ">{title}</h2>
                    <div className="card-actions">
                        <Link to={`/update/${_id}`}>
                            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold btn-sm font-mono">Detail</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cars;