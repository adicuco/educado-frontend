import axios, { AxiosRequestConfig } from "axios";

const backend_url = import.meta.env.VITE_BACKEND_URL;

// Interface for course content
export interface CourseInterface {
  title: string;
  description: string;
}

// Interface for Exercise
export interface ExerciseInterface {
  onWrongFeedback: {
    url: string;
  };
  content: {
    url: string;
  };
  answers: [
    {
      text: string;
      correct: boolean;
    },
    {
      text: string;
      correct: boolean;
    }
  ];
}

// CREATE NEW COURSE
export const CREATE_COURSE = "CREATE_COURSE"; // FIXME: wth is this?
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

export const SAVE_EXCERCISE = "SAVE_EXCERCISE"; // FIXME: wth is this?
const saveExercise = async (
  props: ExerciseInterface,
  token: string | null | undefined
) => {
  const config: AxiosRequestConfig = {
    headers: { Authorization: `Bearer ${token}` },
  };

  // Send the info to exercise service
  return axios.put(
    `http://127.0.0.1:8888/api/exercises/${"6372532fe975371444cba82b"}`,
    props,
    config
  );
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
  saveExercise,
  updateCourseDetail
};

export default CourseServices;
