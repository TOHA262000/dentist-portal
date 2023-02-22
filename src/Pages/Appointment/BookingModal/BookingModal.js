import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const BookingModal = ({ selectedTreatment, selectedDate }) => {
    const {user}=useContext(AuthContext);
    const { name, slots } = selectedTreatment;
    const date = format(selectedDate, 'PP');

    const bookingHandle = event => {
        event.preventDefault();
        const form = event.target;
        const patientName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value; 
        const booking={
            appointmentDate:date,
            slot,
            treatment:name,
            patientName,
            email,
            phone,
        }
        console.log(booking);
    }
    

    
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={bookingHandle} className='grid gap-2 grid-cols-1 mt-5' >
                        <input type="text" disabled value={date} className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {slots.map((slot,i)=><option key={i} value={slot}>{slot}</option>)}
                        </select>
                        <input name='name'defaultValue={user?.displayName}  type="text" placeholder="Your Name" className="input input-bordered w-full" />
                        <input required  name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input defaultValue={user?.email} required name='email' type="email" placeholder="Email" className="input input-bordered w-full" />
                        <input type="submit" className="btn w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;