import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContextProvider';

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <button className="btn loading">loading</button>;
    }
    if (user) {
        return children
    } else {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
};

export default PrivateRoute;