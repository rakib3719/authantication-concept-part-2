
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { EmailContext } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

const PriviteRoute = ({children}) => {

    const {user, loading} = useContext(EmailContext)
    if(loading){

        return <span className="loading loading-spinner loading-lg"></span> 
    }
    
    if(user){
        return children;
    }

    else{
        return <Navigate  to='/login' ></Navigate>
    }
};

PriviteRoute.propTypes = {
    children : PropTypes.node
};

export default PriviteRoute;