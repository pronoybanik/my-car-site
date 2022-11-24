import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const Review = () => {
    const data = useLoaderData()
    const { image_url, title, location, sellprice, productuse, sellname, realprice } = data;

    // useEffect(() => {
    //     fetch(`http://localhost:5000/${services?.id}`)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [services?.id])

    return (
        <div>

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
                    <button className="btn btn-primary">Get Started</button>
                    <label htmlFor="modelId" className="btn">open modal</label>
                </div>
            </div>

        </div>
    );
};

export default Review;