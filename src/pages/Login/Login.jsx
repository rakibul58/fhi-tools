import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Title from '../../components/Title';


const Login = () => {
    const { logIn } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [visibility, setVisibility] = useState(false);
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();

        logIn(userData.email, userData.password)
            .then(() => {
                setError("");
                setUserData({
                    email: "",
                    password: ""
                });
                navigate('/dashboard');
            })
            .catch(error => setError(error.message));
    }

    return (
        <div>
            <Title>Login</Title>
            <div className="mb-20">
                <div className="flex justify-center">
                    <form onSubmit={handleSubmit} className="card md:w-1/4 shadow-2xl bg-black bg-opacity-10 py-6">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold mb-6 text-accent">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name='email'
                                    type="email"
                                    value={userData.email}
                                    placeholder="email"
                                    className="input focus:outline-none"
                                    onChange={(event) => setUserData({
                                        ...userData,
                                        email: event.target.value
                                    })}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='w-full flex items-center justify-between pr-2 bg-white rounded-lg'>
                                    <input
                                        name='password'
                                        type={visibility ? "text" : "password"}
                                        placeholder="password"
                                        value={userData.password}
                                        className="input focus:outline-none"
                                        onChange={(event) => setUserData({
                                            ...userData,
                                            password: event.target.value
                                        })}
                                    />
                                    <div onClick={() => setVisibility(!visibility)} className='rounded-full hover:bg-[#00000013]'>
                                        {
                                            visibility ?
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                                </svg>

                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="form-control my-3">
                                <p>Do not Have an Account? <strong><Link className='text-accent' to='/signUp'>SignUp</Link></strong></p>
                                {
                                    error && <p className='text-error text-sm mt-3'>{error}</p>
                                }
                            </div>
                            <input className='btn bg-[#1DCD64] hover:bg-[#1dcd63b0] text-white px-8 rounded-full font-bold' type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;