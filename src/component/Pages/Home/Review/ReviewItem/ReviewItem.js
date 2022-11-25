import React from 'react';

const ReviewItem = ({ service }) => {
    const { image_url, title, location, sellprice, productuse, sellname, realprice } = service;

    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row">

                <figure><img src={image_url} alt="Shoes" /></figure>
                <div>
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <br />
                    <h2 className='font-bold'>seller Name: {sellname}</h2>
                    <h3 >Location: {location}</h3>
                    <h2>Uses: {productuse}</h2>
                    <h2>Market Price: BDT <strong>{realprice}</strong>  </h2>
                    <h2>selling Price: BDT <strong>{sellprice}</strong></h2>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;