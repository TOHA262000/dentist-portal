import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Testimonial from './Testimonial';

const Testimonials = () => {
    const reviewData=[
        {
            _id:1,
            name:"Winson Herry",
            image:people1,
            comment:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location:"Calefornia",
        },
        {
            _id:2,
            name:"Winson Herry",
            image:people2,
            comment:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location:"Calefornia",
        },
        {
            _id:3,
            name:"Winson Herry",
            image:people3,
            comment:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location:"Calefornia",
        },
    ]
    return (
        <section className='my-24'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-xl text-secondary font-semibold'>Testimonial</h3>
                    <h1 className='text-4xl'>What Our Patients Says</h1>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {reviewData.map(review=><Testimonial 
                    key={review._id}
                    review={review}
                ></Testimonial>)}
            </div>
        </section>
    );
};

export default Testimonials;