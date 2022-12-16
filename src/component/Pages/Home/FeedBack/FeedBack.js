import { data } from 'autoprefixer';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FeedBackItem from './FeedBackItem';

const FeedBack = () => {
    const datas = useLoaderData();
    console.log(datas);

    return (
        <div className='font-serif'>
            <h1 className='text-4xl font-semibold text-center'>Feed Back in customer</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6  mt-10'>
                {
                    datas.map(data => <FeedBackItem
                        key={data._id}
                        data={data}
                    ></FeedBackItem>)
                }
            </div>



        </div>
    );
};

export default FeedBack;