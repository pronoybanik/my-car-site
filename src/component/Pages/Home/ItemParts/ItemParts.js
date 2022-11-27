import React from 'react';

const ItemParts = ({ part }) => {
    const {condition, image_url, title, location, realprice} = part
    return (
        <div>
            <div className="card  h-96 shadow-xl">
                <figure><img className='h-52' src={image_url} alt="Shoes " /></figure>
                <div className="card-body">
                    <h2 className="card-title font-serif">
                        {title}
                    </h2>
                        <div className=" badge badge-secondary">{condition}</div>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline font-serif">{location}</div>
                        <div className="badge badge-outline font-serif">BDT {realprice}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemParts;