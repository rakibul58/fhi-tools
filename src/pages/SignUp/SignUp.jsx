import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const SignUp = () => {

    const [organizationData, setOrganizationData] = useState({
        organizationName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        industry: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const { password, confirmPassword, ...OrganizationBody } = organizationData;

        if (password !== confirmPassword) {
            return toast.error("Password is not matching")
        }

        console.log(OrganizationBody);
        toast.success("Your Organization have been registered Successfully")
    }

    // console.log(organizationData);

    return (
        <div className='w-full flex justify-center mb-24 px-3'>
            <form onSubmit={handleSubmit} className="card shadow-2xl bg-black bg-opacity-10 p-3 lg:p-6 rounded-lg">
                <div className="card-body flex flex-col items-center gap-6">
                    <h1 className="text-3xl font-bold mb-6 text-accent text-center">Organization Sign Up</h1>
                    <div className="flex flex-col md:flex-row justify-center gap-0 md:gap-8">
                        <div className="flex flex-col gap-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Organization Name</span>
                                </label>
                                <input
                                    name='organizationName'
                                    type="text"
                                    placeholder="Organization Name"
                                    value={organizationData.organizationName}
                                    onChange={(event) => setOrganizationData({ ...organizationData, organizationName: event.target.value })}
                                    className="input"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input
                                    name='phoneNumber'
                                    type="tel"
                                    placeholder="Phone Number"
                                    value={organizationData.phoneNumber}
                                    onChange={(event) => setOrganizationData({ ...organizationData, phoneNumber: event.target.value })}
                                    className="input"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Industry</span>
                                </label>
                                <input
                                    name='industry'
                                    type="text"
                                    placeholder="Industry"
                                    value={organizationData.industry}
                                    onChange={(event) => setOrganizationData({ ...organizationData, industry: event.target.value })}
                                    className="input"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name='email'
                                    type="email"
                                    placeholder="Email"
                                    onChange={(event) => setOrganizationData({ ...organizationData, email: event.target.value })}
                                    className="input"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    name='password'
                                    type="password"
                                    placeholder="Password"
                                    value={organizationData.password}
                                    onChange={(event) => setOrganizationData({ ...organizationData, password: event.target.value })}
                                    className="input"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input
                                    name='confirmPassword'
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={organizationData.confirmPassword}
                                    onChange={(event) => setOrganizationData({ ...organizationData, confirmPassword: event.target.value })}
                                    className="input"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-control my-3">
                        <div className="mb-3">
                            <p>
                                Already Have an Account? {' '}
                                <strong>
                                    <Link className='text-accent' to='/login'>Login</Link>
                                </strong>
                            </p>
                        </div>
                        <button
                            type="submit"
                            className='btn btn-md bg-[#1DCD64] hover:bg-[#1dcd63b0] text-white px-8 rounded-full font-bold w-full'
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;