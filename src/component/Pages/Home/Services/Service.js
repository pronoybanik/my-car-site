import React, { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem/ServiceItem';

const Service = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://car-server-site.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>

            <h2 className='text-3xl font-bold text-center my-20  text-gray-600 font-serif'>Our Services</h2>

            <div className='ml-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services?.map(data => <ServiceItem  
                        key={data._id}
                        data={data}
                    ></ServiceItem>)
                }
            </div>

        </div>
    );
};

export default Service;