import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register,formState:{errors} , handleSubmit } = useForm();
    const handleSignUp = data => {
        console.log(data);
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
                        <input type="text"
                            {...register("name",{required:"Name is required"})}
                            className="input input-bordered w-full" />
                        {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            {...register("email",{required:"Email address is required"})}
                            className="input input-bordered w-full" />
                        {errors.email&&<p className='text-error'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password",{required:"Password is required",minLength:{value:6,message:"Password must be 6 charecter or longer"}})}
                            className="input input-bordered w-full " />
                        {errors.password&&<p className='text-error'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text-alt">Forgot Password?</span>
                        </label>
                    </div>
                    <div className="form-control w-full ">

                        <input className='btn btn-accent w-full' type="submit" value='Login' />
                        <label className="label text-center ">
                            <p><span className="label-text-alt">Already have an account <Link to='/login' className='text-primary'>Login</Link></span></p>
                        </label>
                    </div>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline w-full">Continue with google</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;