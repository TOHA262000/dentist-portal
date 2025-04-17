import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import TableRow from './TableRow';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showCalender, setShowCalender] = useState(false);
    const formatedDate = format(selectedDate, 'PP');

    // This is the react - query And here "credentials: 'include'"
    // means that browser sent the cookie in requests 
    // headers autometic.
    const { refetch } = useQuery({
        queryKey: ['bookings', formatedDate, user.email],
        queryFn: async () => {
            const res = await fetch(`https://dentist-portal-server.vercel.app/bookings?formatedDate=${formatedDate}&email=${user.email}`,{
                credentials:'include'
            });
            const data = await res.json();
            setBookings(data)
            return data;
        }
    })
    const handleCalender = () => {
        refetch()
        setShowCalender(!showCalender);
    }

    //If user click the selected date twice Then not set setSelectedDate value undefined
    const handleSelectedDate = (date) => {
        console.log(date)
        if (!date) {
            return;
        }
        if (date.getTime() === selectedDate.getTime()) {
            return;
        }
        setSelectedDate(date);

    }
    //All booking show
    const handleAllBooking = () => {
        setShowCalender(false);
        fetch(`https://dentist-portal-server.vercel.app/bookings/all?email=${user.email}`, {
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
            setBookings(data);
        })
    }
    return (
        <>
            <div className='relative flex justify-between my-4'>
                <h1 className='text-3xl' >My appointment</h1>

                <div>
                    <div>
                        <label onClick={handleCalender} className="md:mr-2 my-2 lg:my-0 btn  btn-accent">{formatedDate}</label>
                        <label onClick={handleAllBooking} className=" btn btn-outline">All Booking</label>
                    </div>
                    <div className='bg-gray-200  mt-4 rounded absolute top-12 right-0 z-10 right-0'>
                        {showCalender && <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={handleSelectedDate}
                        />}
                    </div>

                </div>
            </div>
            <div className=" overflow-x-auto z-0">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Time</th>
                            <th>Date</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, i) => <TableRow
                            key={booking._id}
                            booking={booking}
                            index={i}
                        ></TableRow>)}
                    </tbody>
                </table>
            </div>

        </>
    );
};

export default Dashboard;