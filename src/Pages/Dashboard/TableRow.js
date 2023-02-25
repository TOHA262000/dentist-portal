import React from 'react';

const TableRow = ({booking,index}) => {
    const {patientName,treatment,slot}=booking;
    return (
        <>
            <tr>
                <th>{index+1}</th>
                <td>{patientName}</td>
                <td>{treatment}</td>
                <td>{slot}</td>
            </tr>
        </>
    );
};

export default TableRow;