import React from 'react';
import Banner from '../Banner/Banner';
import Exceptional from '../Exceptional/Exceptional';
import InfoCards from '../InfoCard/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import ServiceCards from '../ServiceCards/ServiceCards';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <ServiceCards></ServiceCards>
            <Exceptional></Exceptional>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;