import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar py-4 px-10">
            <div className="navbar-start">
                <Link to={'/'} className="normal-case text-xl font-extrabold font-serif italic text-[#1D86CD]">FHI Tool</Link>
            </div>
            <div className="navbar-end">
                <Link to={'/login'} className="btn bg-[#1DCD64] hover:bg-[#1dcd63b0] text-white px-8 rounded-full">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;