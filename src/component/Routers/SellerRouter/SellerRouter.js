import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useSeller from '../../hooks/useSellers';
import Loading from '../../Pages/Loading/Loading';

const SellerRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isSeller, sellerLoading] = useSeller(user?.email)
    const location = useLocation();

    if (loading || sellerLoading) {
        return <Loading></Loading>
    }

    if (user && isSeller) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default SellerRouter;