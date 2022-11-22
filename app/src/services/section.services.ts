import axios, { AxiosRequestConfig } from "axios";
import { Section } from "../interfaces/CourseDetail";

const backend_url = import.meta.env.VITE_BACKEND_URL + 'api';

export const getSectionDetail = (url: string, token: string) => {
    const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${token}` }
    }
    return axios.get(url, config).then(res => res.data.data)
}

// boilerplate
export const getExerciseDetail = (url: string, token: string) => {
    const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${token}` }
    }
    return axios.get(url, config).then(res => res.data.data)
}

export const saveSection = async (
    props: Section,
    token: string | null | undefined,
    sid: string | null | undefined
  ) => {
    const config: AxiosRequestConfig = {
      headers: { Authorization: `Bearer ${token}` },
    };
  
    // Send the info to exercise service
    return axios.put(
      `${backend_url}/sections/${sid}`,
      props,
      config
    );
  };

const SectionServices = {
    getSectionDetail,
    getExerciseDetail,
    saveSection
};

export default SectionServices;