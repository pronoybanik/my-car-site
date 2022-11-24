import React, { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem/ServiceItem';

const Service = () => {
 const [services , setServices] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                services.map(data =><ServiceItem
                key={data._id}
                data={data}
                ></ServiceItem>)
            }
            </div>
            
        </div>
    );
};

export default Service;