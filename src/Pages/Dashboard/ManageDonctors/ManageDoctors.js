import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageDoctors = () => {
    const { data: doctors = [],refetch } = useQuery({
        queryKey: ['doctors-info'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/doctors', {
                credentials: 'include'
            });
            const data = res.json();
            return data;
        }
    });
    const handleDelteDoctor = id =>{
        fetch(`http://localhost:5000/doctors/${id}`,{
            method:'DELETE',
            credentials: 'include'
        })
        .then(res=>res.json())
        .then(data=>{

            refetch();
        })
    }
    return (
        <div>
            <h2 className="text-3xl my-2">Manage Doctors</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors?.map((doctor, i) => <tr key={doctor._id}>
                            <th>
                                {i + 1}
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="w-16 rounded-full">
                                            <img alt='' src={doctor.imgUrl}/>
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td> {doctor.name}</td>
                            <td>{doctor.specialty}</td>
                            <th>
                                <button onClick={()=>handleDelteDoctor(doctor._id)} className="btn btn-warning  btn-xs ">Delete</button>
                            </th>
                        </tr>)}


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageDoctors;