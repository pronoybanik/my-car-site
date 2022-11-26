import React, { useEffect, useState } from 'react';
import BannerTwo from '../Benare/BannerTwo/BannerTwo';
import ItemParts from '../ItemParts/ItemParts';

const SpareParts = () => {

    const [parts, setParts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/spare')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div>
            <BannerTwo></BannerTwo>
            {/* <h2>Spare Parts page: {parts.length}</h2> */}

            <div className='my-16'>
                <h2 className='text-2xl font-bold text-center mb-20'>Car Parts For Snell</h2>

                <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 '>
                    {
                        parts.map(part => <ItemParts
                            key={part._id}
                            part={part}
                        ></ItemParts>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SpareParts;