import { Link } from "react-router-dom";
import img from '../../assets/A-404-Page-Best-Practices-and-Design-Inspiration (1).png'

const ErrorPage = () => {
    return (
        <section className="flex items-center max-h-screen">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className=''>
                    <img src={img} alt="" />
                </div>
                <div className="max-w-md text-center mt-6">
                    <p className="text-2xl font-extrabold md:text-3xl">Sorry, we could not find this page.</p>
                    <p className="mt-4 mb-2 text-base-50 font-semibold">But don not worry, you can find plenty of other things on our homepage.</p>
                    <Link to='/' className="btn bg-[#1DCD64] hover:bg-[#1dcd63b0] text-white px-8 rounded-full">Go To Home Page</Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;