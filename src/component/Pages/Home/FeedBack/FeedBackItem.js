import React from 'react';

const FeedBackItem = ({ data }) => {
    return (
        <div className='p-4'>
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Name:  {data.name}</h2>
                    <p>Email:-  {data.email}</p>
                    <p>FeedBack:-  {data.feedback}</p>
                </div>
            </div>
        </div>
    );
};

export default FeedBackItem;