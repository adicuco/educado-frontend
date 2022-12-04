import { make_authenticated_axios } from "./axios.wrappers";

// Intefaces
import { Section } from "../interfaces/CourseDetail";

const backend_url = import.meta.env.VITE_BACKEND_URL + 'api';

// Create dynamic axios with authorization header set
const axios = make_authenticated_axios();

export const getSectionDetail = (url: string) => {
    return axios.get(url).then(res => res.data.data)
}

// boilerplate
export const getExerciseDetail = (url: string) => {
    return axios.get(url).then(res => res.data.data)
}

export const saveSection = async (props: Section, sid: string | null | undefined) => {
    // Send the info to caller
    return axios.put(`${backend_url}/sections/${sid}`);
};

const SectionServices = {
    getSectionDetail,
    getExerciseDetail,
    saveSection
};

export default SectionServices;
