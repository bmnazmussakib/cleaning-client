import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';

const PrivateRoute = ({ children, ...rest }) => {

    const { login } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = login;

    const userToken = localStorage.getItem('token');

    const location = useLocation();




    return (
        <div>
            {userToken ? children : <Navigate to='/login' state={{ form: location }} />}
        </div>
    );
};

export default PrivateRoute;