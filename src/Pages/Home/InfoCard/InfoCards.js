import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg'
import phone from '../../../assets/icons/phone.svg'
import marker from '../../../assets/icons/marker.svg'



const InfoCards = () => {
    const cardData=[
        {
            id:1,
            name:"Opening Hour",
            details:"Open 9.00 am to 5.pm everyday",
            icon:clock,
            bg:"bg-gradient-to-r from-primary to-secondary"
        },
        {
            id:2,
            name:"Visit Our Location",
            details:"Mirpur shewrapara Hossain plaza",
            icon:marker,
            bg:"bg-accent"
        },
        {
            id:3,
            name:"Contact Us now",
            details:"+8801700000000",
            icon:phone,
            bg:"bg-gradient-to-r from-primary to-secondary"
        }

    ]

    return (
        <div className='lg:flex justify-between'>
            {cardData.map(card=><InfoCard
                key={card.id}
                card={card}
        
            ></InfoCard>)}
        </div>
    );
};

export default InfoCards;