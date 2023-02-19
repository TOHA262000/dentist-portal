import React from 'react';
const AppointmentOption = ({ appointmentOption,setSelectedTreatment }) => {
    const { name, slots } = appointmentOption;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary">{name}</h2>

                <p>{slots.length>0 ? slots[0] : 'Try another day'}</p>
                <p>{slots.length} {slots.length>1 ? 'spaces' : 'space'} available</p>
                
                <div className="card-actions justify-center">
                    <label 
                        disabled={slots.length===0}
                        onClick={()=>setSelectedTreatment(appointmentOption)} 
                        htmlFor="booking-modal" 
                        className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
                            BOOK APPOINTMENT
                    </label>
                    
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;