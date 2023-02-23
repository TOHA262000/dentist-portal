import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableService = ({ selectedDate }) => {
    const [selectedTreatment, setSelectedTreatment] = useState(null);

    // fetch using React Query 
    const { data: appointmentOptions = [] } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentOptions');
            const data = await res.json();
            return data;
        }
    })
    return (
        <section className='my-16'>
            <p className='text-secondary text-xl text-center'>Available Services on {format(selectedDate, 'PP')}</p>
            <div className='mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {appointmentOptions.map(option => <AppointmentOption
                    key={option._id}
                    appointmentOption={option}
                    setSelectedTreatment={setSelectedTreatment}
                ></AppointmentOption>)}
            </div>

            {
                selectedTreatment &&
                <BookingModal
                    selectedTreatment={selectedTreatment}
                    selectedDate={selectedDate}
                    setSelectedTreatment={setSelectedTreatment}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableService;