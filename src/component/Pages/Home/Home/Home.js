import React from 'react';
import Benare from '../Benare/Benare';
import DetailCard from '../DetailCard/DetailCard';
import EmailFild from '../EmailFild/EmailFild';
import Service from '../Services/Service';

const Home = () => {
    return (
        <div>
            <Benare></Benare>
            <Service></Service>
            <DetailCard></DetailCard>
            <EmailFild></EmailFild>
        </div>
    );
};

export default Home;