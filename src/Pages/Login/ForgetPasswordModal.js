import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ForgetPasswordModal = () => {
    const [resetMessage,setResetMessage]=useState('')
    const {resetPassword}=useContext(AuthContext);
    const handleResetPassword = (event) => {
        setResetMessage('');
        event.preventDefault();
        const email = event.target.email.value;
        resetPassword(email)
        .then(()=>{
            setResetMessage('Please Check your email for reset your password');
        })
        .catch(err=>{
            console.log(err)
            setResetMessage(err.message);
        });
        console.log(email);
    };
    return (
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-lg font-medium mb-4">Reset Password</h2>
            <form onSubmit={handleResetPassword}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  name='email'
                  
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Reset Password
              </button>
              {resetMessage&&<div className='text-error'>{resetMessage}</div>}
            </form>
          </div>
        </div>
      );
};

export default ForgetPasswordModal;