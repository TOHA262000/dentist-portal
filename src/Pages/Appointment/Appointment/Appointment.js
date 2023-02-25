import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableService from '../AvailableService/AvailableService';

const Appointment = () => {


    const [selectedDate,setSelectedDate]=useState(new Date())

    //If user click the selected date twice Then not set setSelectedDate value undefined
    const handleSelect=(date) => {
        if(!date){
            return;
        }
        if (date.getTime() === selectedDate.getTime()) {
            return;
          }
          setSelectedDate(date);
    }
    return (
        <div>
            <AppointmentBanner 
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                handleSelect={handleSelect}
            ></AppointmentBanner>
            <AvailableService 
                selectedDate={selectedDate}
            ></AvailableService>

        </div>
    );
};

export default Appointment;