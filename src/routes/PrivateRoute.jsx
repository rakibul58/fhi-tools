import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (user && (location.pathname === '/login' || location.pathname === '/signUp')) {
        return <Navigate to='/dashboard' />;
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }}></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.any.isRequired,
};

export default PrivateRoute;