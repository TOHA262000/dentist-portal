import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableService = ({ selectedDate }) => {
    const [selectedTreatment, setSelectedTreatment] = useState(null);
    
    const date = format(selectedDate, 'PP');
    // fetch using React Query 
    const { data: appointmentOptions=[],refetch,isLoading } = useQuery({
        queryKey: ['appointmentOptions',date],
        queryFn: async () => {
            const res = await fetch(`https://dentist-portal-server.vercel.app/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data;
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <section className='my-16'>
            <p className='text-secondary text-xl text-center'>Available Services on {date}</p>
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
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableService;