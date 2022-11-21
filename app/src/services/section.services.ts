import axios, { AxiosRequestConfig } from "axios";

const backend_url = import.meta.env.VITE_BACKEND_URL;

export const getSectionDetail = (url: string, token: string) => {
    const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${token}` }
    }
    return axios.get(url, config).then(res => res.data)
}

// boilerplate
export const getExerciseDetail = (url: string, token: string) => {
    const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${token}` }
    }
    return axios.get(url, config).then(res => res.data)
}

const SectionServices = {
    getSectionDetail,
    getExerciseDetail
};

export default SectionServices;