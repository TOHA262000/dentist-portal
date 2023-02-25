import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import TableRow from './TableRow';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [date, setDate] = useState(new Date());
    const [showCalender, setShowCalender] = useState(false);
    const formatedDate = format(date, 'PP');
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', formatedDate, user.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?formatedDate=${formatedDate}&email=${user.email}`, {
                method: 'get',
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            return data;

        }
    })
    const handleCalender = () => {
        setShowCalender(!showCalender);
    }
    return (
        <>
            <div className='relative flex justify-between my-4'>
                <h1 className='text-3xl' >My appointment</h1>

                <div>
                    <label onClick={handleCalender} className="btn btn-outline">{formatedDate}</label>
                    <div className='bg-gray-200  mt-4 rounded absolute top-12 right-0 z-10 right-0'>
                        {showCalender && <DayPicker
                            mode='single'
                            selected={date}
                            onSelect={setDate}
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