import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData();
    const {treatment}= booking;
    console.log(booking);
    return (
        <div>
            <div className='text-3xl my-4'>Payment</div>

            <div>
                {treatment}
            </div>
        </div>
    );
};

export default Payment;