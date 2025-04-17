import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FcCheckmark } from 'react-icons/fc'
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const AllUsers = () => {
    const [deletingUser, setDeletingUser] = useState(null);
    const handleDeleteCancel = () => {
        setDeletingUser(null);
    }
    const handleDeleteConfirm = () => {
        handleDelteUser(deletingUser._id);
    }
    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://dentist-portal-server.vercel.app/users', {
                credentials: 'include'
            });
            const data = await res.json();
            return data;
        }
    });

    const handleMakeAdmin = id => {
        fetch(`https://dentist-portal-server.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    toast.success('Make Admin Successful');
                    refetch();
                }
            })
    }
    const handleDelteUser = id => {
        fetch(`https://dentist-portal-server.vercel.app/users/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                setDeletingUser(null);
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="my-4 text-3xl">All users</h2>
            <div>

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Admin</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role === 'admin' ? <FcCheckmark></FcCheckmark> : <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                                <td>
                                    <label onClick={()=>setDeletingUser(user)} htmlFor="confirmation-modal" className="btn btn-error text-base-100 btn-xs">Delete</label>

                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
            {deletingUser && <ConfirmationModal
                title={`Are you sure you want to delete ${deletingUser.name}`}
                body={`If you delete the user you will not get the user information again.`}
                cancel={handleDeleteCancel}
                action={handleDeleteConfirm}
            ></ConfirmationModal>}
        </div>
    );
};

export default AllUsers;