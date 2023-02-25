import React from 'react';

const TableRow = ({booking,index}) => {
    const {patientName,treatment,appointmentDate,slot}=booking;
    return (
        <>
            <tr>
                <th>{index+1}</th>
                <td>{patientName}</td>
                <td>{treatment}</td>
                <td>{slot}</td>
                <td>{appointmentDate}</td>
            </tr>
        </>
    );
};

export default TableRow;