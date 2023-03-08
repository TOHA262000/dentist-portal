import React from 'react';
import { Link } from 'react-router-dom';

const TableRow = ({ booking, index }) => {
    const { patientName, treatment, appointmentDate, slot, _id } = booking;
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{patientName}</td>
                <td>{treatment}</td>
                <td>{slot}</td>
                <td>{appointmentDate}</td>
                <td>
                    {!booking.paid && booking.price &&
                        <Link className='btn btn-success btn-xs' to={`/dashboard/payment/${_id}`}>
                            Pay
                        </Link>
                    }
                    {booking.paid && booking.price &&
                        <span className='text-success'>Paid</span>
                    }

                </td>
            </tr>
        </>
    );
};

export default TableRow;