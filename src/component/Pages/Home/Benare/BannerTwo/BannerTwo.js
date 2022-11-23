import React from 'react';
import img from '../../../../../images/forced-cooling-promo-still-2.jpg'
import './BannerTwo.css'

const BannerTwo = () => {
    return (
        <div>
            <div className=" w-full">
                    <img  src={img} className=" w-full h-96" alt=''/>
              </div>
        </div>
    );
};

export default BannerTwo;