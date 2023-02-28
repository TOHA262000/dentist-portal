import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const { createUser, updateUser, verifyEmail } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [createUserEmail, setCreateUserEmail] = useState('');
    const [token] = useToken(createUserEmail);

    if(token){
        navigate('/');
    }


    // React Form control give a data for all the value from the input field in your form.
    const handleSignUp = data => {
        createUser(data.email, data.password)

            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        verifyEmail()
                            .then(() => {
                                handleSaveUser(data.name, data.email);
                            })
                            .catch(err => console.log(err))
                    })
                    .catch(err => console.log(err))

            })
            .catch(err => console.log(err));

    }
    const handleSaveUser = (name, email) => {
        const saveUser = {
            name,
            email,
        }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(saveUser),
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Please Check Your Email for varify');
                setCreateUserEmail(email);

            })
    }

    return (
        <div className="hero min-h-screen flex justify-center items-center">
            <div className='rounded-xl bg-base-100 shadow-xl w-96 p-6'>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <h2 className='text-3xl text-center mb-16'>Sign Up</h2>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"{...register("name",
                            {
                                required: "Name is required"
                            })} className="input input-bordered w-full" />
                        {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email",
                            {
                                required: "Email address is required"
                            })} className="input input-bordered w-full" />
                        {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"{...register("password",
                            {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be 6 charecter or longer" },
                                pattern: { value: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/, message: "At least one uppercase letter, one lowercase letter and one number:" },
                            })} className="input input-bordered w-full " />
                        {errors.password && <p className='text-error'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text-alt">Forgot Password?</span>
                        </label>
                    </div>
                    <div className="form-control w-full ">

                        <input className='btn btn-accent w-full' type="submit" value='Sign Up' />
                        <label className="label text-center ">
                            <p><span className="label-text-alt">Already have an account <Link to='/login' className='text-primary'>Login</Link></span></p>
                        </label>
                    </div>

                </form>
                <div className="divider">OR</div>
                <button className="btn btn-outline w-full">Continue with google</button>
            </div>
        </div>
    );
};

export default SignUp;