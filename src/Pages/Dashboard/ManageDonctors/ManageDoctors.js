import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const { data: doctors = [],isLoading, refetch } = useQuery({
        queryKey: ['doctors-info'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/doctors', {
                credentials: 'include'
            });
            const data = res.json();
            return data;
        }
    });
    const handleDeleteCancel =()=>{
        setDeletingDoctor(null);
    }
    const handleDeleteConfirm =()=>{
        handleDelteDoctor(deletingDoctor._id);
    }
    const handleDelteDoctor = id => {
        fetch(`http://localhost:5000/doctors/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {

                refetch();
                setDeletingDoctor(null);
            })
    }
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-3xl my-2">Manage Doctors</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
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
                                            <img alt='' src={doctor.imgUrl} />
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td> {doctor.name}</td>
                            <td>{doctor.specialty}</td>
                            <th>
                                <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-error text-base-100 btn-xs">Delete</label>
                            </th>
                        </tr>)}


                    </tbody>
                </table>
            </div>
            {deletingDoctor && <ConfirmationModal
                title={`Are you sure you want to delete D. ${deletingDoctor.name}`}
                body={`If you delete ${deletingDoctor.name} then it's can not be undo`}
                cancel={handleDeleteCancel}
                action={handleDeleteConfirm}
            ></ConfirmationModal>}

        </div>
    );
};

export default ManageDoctors;