import React from 'react';
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import fluoride from '../../../assets/images/fluoride.png'
import ServiceCard from './ServiceCard';

const ServiceCards = () => {

    const serviceCardData = [
        {
            id: 1,
            name: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            image: fluoride
        },
        {
            id: 2,
            name: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            image: cavity
        },
        {
            id: 3,
            name: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            image: whitening
        },

    ]
    return (

        <div >
            <div className='text-center my-16'>
                <h4 className='text-xl text-primary'>OUR SERVICES</h4>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {serviceCardData.map(card => <ServiceCard
                    key={card.id}
                    card={card}
                ></ServiceCard>)}
            </div>
        </div>
    );
};

export default ServiceCards;