import React from 'react';

const BannerItem = ({slide}) => {
    const {image, prev, id, next} = slide;
    return (
        <div id= {`slide${id}`} className="carousel-item relative w-full ">
                    <div className='carousel-img'>

                        <img src={image} className="w-full rounded-xl  h-full" />
                    </div>

                    <div className="absolute  flex justify-end transform -translate-y-1/2 left-96  top-1/3">
                        <h1 className='font-bold tex  italic text-white text-5xl'>
                        Find your next car with us
                        </h1>
                    </div>
                    <div className="absolute flex justify-center transform   -translate-y-1/2 left-80  top-2/4">
                        <p className='text-white italic  text-2xl' > Cars are the four-wheeler automobiles that are run for an individual or a 
                         small group  <br /> of people, such as a family. It is a convenience in the  modern world especially in <br /> places where the public transport is not easily available or is not very reliable </p>
                    </div>
                    
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href={`#slide${prev}`} className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white mr-3">❮</a>
                        <a href={`#slide${next}`} className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white  ">❯</a>
                    </div>
                </div>
    );
};

export default BannerItem;