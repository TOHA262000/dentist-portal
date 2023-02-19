import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableService from '../AvailableService/AvailableService';

const Appointment = () => {
    const [selectedDate,setSelectedDate]=useState(new Date())
    return (
        <div>
            <AppointmentBanner 
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailableService 
                selectedDate={selectedDate}
            ></AvailableService>

        </div>
    );
};

export default Appointment;