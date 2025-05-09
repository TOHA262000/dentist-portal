import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    let from = location.state?.from?.pathname || "/";

    if (token) {
        navigate(from, { replace: true });
    }


    const handleLogin = data => {
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                setLoginUserEmail(user.email);
            })
            .catch(err => {
                setLoginError(err.message);
                console.log(err.message);

            });
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                handleSaveUser(user.displayName, user.email);
            })
            .catch(err => console.log(err));
    }
    const handleSaveUser = (name, email) => {
        const saveUser = {
            name,
            email,
        }
        fetch('https://dentist-portal-server.vercel.app/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(saveUser),
        })
            .then(res => res.json())
            .then(data => {
                setLoginUserEmail(email);
            })
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
                        <input type="email"
                            {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered w-full" />
                        {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be 6 character or longer" } })}
                            className="input input-bordered w-full " />
                        {errors.password && <p className='text-error'>{errors.password?.message}</p>}
                        <label className="label">
                            <Link to='/forgetpass' className="label-text-alt">Forgot Password?</Link>
                        </label>
                    </div>
                    <div className="form-control w-full ">

                        <input className='btn btn-accent w-full' type="submit" value='Login' />
                        {loginError && <p className='text-error'>{loginError}</p>}
                        <label className="label text-center ">
                            <p><span className="label-text-alt">New to Dentist Portal <Link to='/signup' className='text-primary'>Creat Account</Link></span></p>
                        </label>
                    </div>

                </form>

                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">Continue with google</button>

            </div>
        </div>
    );
};

export default Login;