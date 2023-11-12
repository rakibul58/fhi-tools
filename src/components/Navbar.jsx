import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar py-4 px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
                <Link to={'/'} className="normal-case text-xl font-bold font-serif italic text-[#1D86CD]">FHI Tool</Link>
            </div>
            <div className="navbar-end">
                <Link className="btn bg-[#1DCD64] hover:bg-[#1dcd63b0] text-white px-8 rounded-full">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;