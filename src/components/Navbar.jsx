import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleClick = async () => {
        await logOut();
    };
    return (
        <div className="navbar py-4 px-10">
            <div className="navbar-start">
                <Link to={'/'} className="normal-case text-xl font-extrabold font-serif italic text-[#1D86CD]">FHI Tool</Link>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <Link to={'/dashboard'} className="btn bg-[#1D86CD] hover:bg-[#1d87cd98] text-white px-8 rounded-full mr-2">
                                Dashboard
                            </Link>
                            <Link onClick={handleClick} className="btn bg-[#1DCD64] hover:bg-[#1dcd63b0] text-white px-8 rounded-full">
                                Log Out
                            </Link>
                        </>
                        :
                        <Link to={'/login'} className="btn bg-[#1DCD64] hover:bg-[#1dcd63b0] text-white px-8 rounded-full">
                            Login
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;