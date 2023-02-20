import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();

    const handleLogin = data =>{
        console.log(data);
    }
    return (
        <div className="hero min-h-screen flex justify-center items-center">
            <div className='rounded-xl bg-base-100 shadow-xl w-96 p-6'>
                <h2 className='text-3xl text-center mb-16'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input required type="email" {...register("email")}className="input input-bordered w-full" />
                        
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input required type="password" {...register("password")}className="input input-bordered w-full " />
                        <label className="label">
                            <span className="label-text-alt">Forgot Password?</span>
                        </label>
                    </div>
                    <div className="form-control w-full ">
                        
                        <input className='btn btn-accent w-full' type="submit" value='Login'/>
                        <label className="label text-center ">
                            <p><span className="label-text-alt">New to Dentist Portal <Link className='text-primary'>Creat Account</Link></span></p>
                        </label>
                    </div>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline w-full">Continue with google</button>
                    
                </form>
            </div>

        </div>
    );
};

export default Login;