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

    if (user) {
        return children;
    }

    //TODO: If user types /login or /signUp and register while they are logged in it should redirect to dashboard

    return <Navigate to='/login' state={{ from: location }}></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.any.isRequired,
};

export default PrivateRoute;