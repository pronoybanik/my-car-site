import React from 'react';
import img from '../../../../images/FlL6v5.jpg'

const DetailCard = () => {
    return (
        <div>
            <div className='my-28'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className=" lg:max-w-lg rounded-lg shadow-2xl "  />
                    <div className=' w-1/2'>
                        <h1 className="text-4xl  font-bold font-serif">The Car is mode Transportation</h1>
                        <p className="py-6 font-serif">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                       <button className=' font-mono btn btn-primary bg-gradient-to-r from-primary to-secondary text-white mr-3 font-bold'>Get Start</button>
                    </div>
                </div>
            </div>

        </div>
        </div>
    );
};

export default DetailCard;