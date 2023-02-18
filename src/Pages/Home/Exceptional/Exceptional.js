import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const Exceptional = () => {
    return (
        <div className='lg:mx-36 my-8 lg:my-40'>
            <div className="card lg:items-center md:card-side bg-base-100 ">
                <img className="rounded-xl lg:w-1/2" src={treatment} alt="treatment" />
                <div className="card-body align-middle">
                    <h2 className="card-title text-5xl">Exceptional Dental </h2>
                    <h2 className="card-title text-5xl">Care, on Your Terms</h2>
                    <h3 className='my-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</h3>
                    <div className="card-actions">
                        <button className="btn btn-primary">Get started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;