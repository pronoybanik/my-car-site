import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pages from '../Pages/Pages';

const SellItems = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://car-server-site.vercel.app/products')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    return (
        <div>
            <h2 className='text-3xl font-bold my-20 font-serif text-gray-600 text-center '> These products will be sold</h2>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28'>
                {
                    items.map(item => <Pages
                        key={item._id}
                        item={item}
                    ></Pages>)
                }
            </div>
            <div className="card-actions justify-center">
                <Link className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold mt-10 ' to='dashboard/addproduct'> add a prodect to sell</Link>
            </div>

          
        </div>
    );
};

export default SellItems;