import React from 'react';

const Testimonial = ({ review }) => {
    const { name, location, comment, image } = review;
    return (
        <div className="p-4 card md:w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{comment}</p>
            </div>
            <div className='flex items-center justify-evenly'>
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={image} alt='' />
                    </div>
                </div>
                <div>
                    <h4>{name}</h4>
                    <p>{location}</p>
                </div>
            </div>

        </div>
    );
};

export default Testimonial;