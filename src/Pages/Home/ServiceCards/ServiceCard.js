import React from 'react';

const ServiceCard = ({card}) => {
    const{name,description,image}=card;
    return (
        <div className="m-5 card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;