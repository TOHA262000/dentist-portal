import React from 'react';
import bg from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton';

const ContactUs = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})` }} className="hero py-8">
            <div className="card flex-shrink-0 w-full max-w-sm  ">
                <div className='text-center'>
                    <h4 className='text-xl text-primary'>Contact Us</h4>
                    <h2 className='text-4xl text-white'>Stay conected with us</h2>
                </div>
                <div className="card-body">
                    <div className="form-control">
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="subject" className="input input-bordered" />
                    </div>
                    <textarea placeholder="Your Message" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                    <div className="form-control mt-6">
                        <PrimaryButton>Submit</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;