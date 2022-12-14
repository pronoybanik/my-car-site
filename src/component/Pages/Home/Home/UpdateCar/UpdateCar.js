import React, { useEffect, useState } from 'react';
import Cars from '../../Cars/Cars';

const UpdateCar = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://car-server-site.vercel.app/updatecar')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div >
            <h2 className='my-20 text-center text-3xl text-gray-600 font-semibold font-serif'>Latest News & Reviews car</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-2'>
                {
                    items.map(item => <Cars
                        key={item._id}
                        item={item}
                    ></Cars>)
                }
            </div>

        </div>
    );
};

export default UpdateCar;