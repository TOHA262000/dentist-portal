import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import {FcCheckmark} from 'react-icons/fc'

const AllUsers = () => {
    const { data: users=[],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users',{
                credentials: 'include' 
            });
            const data = await res.json();
            return data;
        }
    });

    const handleMakeAdmin = id =>{
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method:'PUT',
            credentials: 'include'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.matchedCount>0){
                toast.success('Make Admin Successful');
                refetch();
            }
        })
    }
    const handleDelteUser = id =>{
        fetch(`http://localhost:5000/users/${id}`,{
            method:'DELETE',
            credentials:'include'
        })
        .then(res=>res.json())
        .then(data=>{
            refetch();
        })
    }
    return (
        <div>
            <h2 className="text-3xl">All users</h2>
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
                                <td>{user?.role ==='admin'?<FcCheckmark></FcCheckmark> : <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button> }</td>
                                <td><button onClick={()=>handleDelteUser(user._id)} className='btn btn-xs text-error'>X</button></td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;