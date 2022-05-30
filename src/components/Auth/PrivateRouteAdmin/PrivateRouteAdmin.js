import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';

const PrivateRouteAdmin = ({ children, ...rest }) => {


    const { admin } = useContext(UserContext);

    const [loggedInAdmin, setLoggedInAdmin] = admin;

    const adminToken = localStorage.getItem('adminToken');

    const location = useLocation();


    return (
        <div>
            {adminToken ? children : <Navigate to='/admin-login' state={{ form: location }} />}
        </div>
    );
};

export default PrivateRouteAdmin;