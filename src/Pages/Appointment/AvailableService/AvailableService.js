import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableService = ({selectedDate}) => {
    const[appointmentOption,setAppointmentOption]=useState([]);
    const[selectedTreatment,setSelectedTreatment]=useState({});
    useEffect(()=>{
        fetch('appointmentOptions.json')
        .then(res=>res.json())
        .then(data=>setAppointmentOption(data))
    },[])

    return (
        <section className='my-16'>
            <p className='text-secondary text-xl text-center'>Available Services on {format(selectedDate,'PP')}</p>
            <div className='mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {appointmentOption.map(option=><AppointmentOption 
                    key={option._id}
                    appointmentOption={option}
                    setSelectedTreatment={setSelectedTreatment}
                    ></AppointmentOption>)}
            </div>
            <BookingModal 
                selectedTreatment={selectedTreatment}
            ></BookingModal>
        </section>
    );
};

export default AvailableService;