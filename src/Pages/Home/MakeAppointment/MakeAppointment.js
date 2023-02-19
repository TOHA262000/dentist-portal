import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import bg from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton';
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
    return (
        <section className='lg:h-[540px]  text-white' style={{ backgroundImage:`url(${bg})` }} >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img alt='' src={doctor} className="-mt-32 hidden md:block rounded-lg lg:w-2/3" />
                    <div>
                        <h3 className='text-xl font-semibold text-primary'>Appointment</h3>
                        <h1 className="text-4xl font-bold">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <Link to='/appointment'><PrimaryButton>Appointment</PrimaryButton></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;