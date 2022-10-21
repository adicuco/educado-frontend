import React, { ReactNode } from 'react'
import { useLocation, Navigate } from 'react-router-dom'

// contexts
import useAuthStore from '../contexts/useAuthStore'

const RequireAuth = ({ children }: { children: Array<ReactNode> | ReactNode }) => {
    const auth = useAuthStore(state => state.token);
    const location = useLocation();

    console.log(auth);

    if (!auth) {
        return <Navigate to="/login" state={{ from: location }} replace={true} />
    }

    return <>{children}</>
}

export default RequireAuth;