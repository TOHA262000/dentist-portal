import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import {AuthContext} from '../../../contexts/AuthProvider/AuthProvider'
const DisplayError = () => {
    const {logOut}=useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();
    const handleSignOut = () => {
        logOut()
            .then(result => {
                navigate('/')

            })
            .catch(err => console.log(err));
    }
    return (
        <div className='text-center p-4'>
            <p className='text-2xl  text-error'>Something went wrong!!</p>
            <p className='text-xl my-4  text-error'>{error.statusText || error.message}</p>
            <p>Please <button onClick={handleSignOut} className='text-info'>Sign Out</button> and login again</p>
        </div>
    );
};

export default DisplayError;