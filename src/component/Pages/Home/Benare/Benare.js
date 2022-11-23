import React from 'react';
import BannerItem from '../BannerItem/BannerItem';
import img1 from '../../../../images/33115.jpg';
import img2 from '../../../../images/Bugatti-Veyron-Sports-Cars-HD-Wallpaper.jpg';
import img3 from '../../../../images/images.jpeg';
import './Banner.css'

const Benare = () => {
    const sliders = [
        {
            image: img1,
            prev: 4,
            id: 1,
            next: 2
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 1
        },

    ]

    return (
        <div>
            <div className="carousel w-full my-10">

                {
                    sliders.map(slide => <BannerItem
                        key={slide.id}
                        slide={slide}
                    ></BannerItem>)
                }

            </div>
        </div>
    );
};

export default Benare;