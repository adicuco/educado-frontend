import axios, { AxiosRequestConfig } from "axios";

const backend_url = import.meta.env.VITE_BACKEND_URL;

// Interface for course content
export interface CourseInterface {
  title: string;
  description: string;
}

// CREATE NEW COURSE
export const CREATE_COURSE = "CREATE_COURSE"; // FIXME: wth is this? //todo: delete line?
const createCourse = async (
  props: CourseInterface,
  token: string | null | undefined
) => {
  const course = {
    title: props.title,
    description: props.description,
  };

  const config: AxiosRequestConfig = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return await axios.post(`${backend_url}/api/courses`, course, config);
};

// GET ALL COURSES
export const GET_ALL_COURSES = "GET_ALL_COURSES";
const getAllCourses = (url: string, token: string) => {
  const config: AxiosRequestConfig = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios.get(url, config).then((res) => res.data);
};

export const GET_COURSE_DETAIL = "GET_ALL_COURSES";
const getCourseDetail = (url: string, token: string) => {
  const config: AxiosRequestConfig = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios.get(url, config).then((res) => res.data);
};

const updateCourseDetail = (data: any, id: any, token: any) => {
  const config: AxiosRequestConfig = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return axios.put(`${backend_url}/api/courses/${id}`, data, config).then((res) => res.data);
}

const CourseServices = {
  createCourse,
  getAllCourses,
  getCourseDetail,
  updateCourseDetail
};

export default CourseServices;
