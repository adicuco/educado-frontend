import React, { ReactNode } from 'react'
import { useLocation, Navigate } from 'react-router-dom'

// Services
import { make_authenticated_axios } from "../services/axios.wrappers"

// contexts
import useAuthStore from '../contexts/useAuthStore'

const RequireAuth = ({ children }: { children: Array<ReactNode> | ReactNode }) => {
    const accessToken = useAuthStore(async state => await state.getToken);
    const location = useLocation();

    if (!accessToken) {
        return <Navigate to="/login" state={{ from: location }} replace={true} />
    }

    // Update axios Authorization header with valid token
    const axios = make_authenticated_axios();
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
    
    return <>{children}</>
}

export default RequireAuth;