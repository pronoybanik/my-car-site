import React from 'react';
import Benare from '../Benare/Benare';
import DetailCard from '../DetailCard/DetailCard';
import EmailFild from '../EmailFild/EmailFild';
import Service from '../Services/Service';
import SellItems from './SellItems/SellItems';
import UpdateCar from './UpdateCar/UpdateCar';

const Home = () => {
    return (
        <div>
            <Benare></Benare>
            <Service></Service>
            <DetailCard></DetailCard>
            <SellItems></SellItems>
            <UpdateCar></UpdateCar>
            <EmailFild></EmailFild>

        </div>
    );
};

export default Home;