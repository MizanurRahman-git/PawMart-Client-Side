import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../Hooks/UseAuth';
import Loading from '../Pages/Loading';

const PrivetRouter = ({children}) => {
    const location = useLocation()
    const {users, loading} = useAuth();

    if(loading){
        return <Loading/>
    }

    if(users && users?.email){
        return children
    }
    return <Navigate state={location.pathname} to='/logIn'></Navigate>
};

export default PrivetRouter;