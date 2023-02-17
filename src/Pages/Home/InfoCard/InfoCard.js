import React from 'react';

const InfoCard = ({card}) => {
    const{name,details,icon,bg}=card;
    return (
        <div className={`rounded-xl m-5 p-4 text-white ${bg} card card-side bg-base-100 shadow-xl`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default InfoCard;