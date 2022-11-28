import React from 'react';

const BannerItem = ({ slide }) => {
    const { image, prev, id, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative sm:w-full w-full ">
            <div className='carousel-img'>

                <img src={image} className="w-full rounded-xl  h-full"  alt=''/>
            </div>

            <div className="absolute ml-4  flex justify-end transform -translate-y-1/2   top-1/3">
                <h1 className='text-center font-bold  font-serif text-white text-5xl'>
                    Find your next car with us
                </h1>
            </div>
            <div className="absolute ml-4 flex justify-center    top-2/4">
                <p className='text-white  font-serif  text-2xl' >
                    Cars are the four-wheeler automobiles that are run for
                    <br /> an individual or a small group  of people, such as a family.
                    <br /> It is a convenience in the  modern world especially in places
                    <br /> where the public transport is not easily available or is not very reliable </p>
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white mr-3">❮</a>
                <a href={`#slide${next}`} className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white  ">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;