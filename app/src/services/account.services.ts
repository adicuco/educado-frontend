import axios, { AxiosRequestConfig } from "axios";


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL + 'api';


const getPublicProfileInfo = (
    profileId: string,
    token: string | null | undefined
) => {
    
    const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${token}` },
    };
    
    return axios.get(`${BACKEND_URL}/public/profiles/${profileId}`, config).then(res => res.data);
}

const getProfileInfo = (
    token: string | null | undefined
    ) => {
        
        const config: AxiosRequestConfig = {
            headers: { Authorization: `Bearer ${token}` },
    };
    
    return axios.get(`${BACKEND_URL}/profile/whoami`, config).then(res => res.data);
}

const updateProfileInfo = (
    data: any,
    token: string | null | undefined
) => {

    const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${token}` },
    };
    
    return axios.put(`${BACKEND_URL}/profile`, data, config).then(res => res.data);
}

const changePassword = (
    data: any,
    token: string | null | undefined
) => {

    const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${token}` },
    };
    
    return axios.put(`${BACKEND_URL}/profile/changePassword`, data, config).then(res => res.data);
}


const AccountServices = {
    getPublicProfileInfo,
    getProfileInfo,
    updateProfileInfo,
    changePassword
};


export default AccountServices;
