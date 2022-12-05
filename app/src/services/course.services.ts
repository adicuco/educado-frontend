import { make_authenticated_axios } from "./axios.wrappers";

// Create dynamic axios with authorization header set
const axios = make_authenticated_axios();

// Interface for posting course content
export interface CourseInterface {
  title: string;
  description: string;
}

// Create a new course
const createCourse = async (props: CourseInterface) => {
  return await axios.post("/api/courses", {
    title: props.title,
    description: props.description,
  });
};

// Get all courses
const getAllCourses = (url: string) => {
  return axios.get(url).then(res => res.data);
};

// Get course detail
const getCourseDetail = (url: string) => {
  return axios.get(url).then((res) => res.data);
};

// Get course categories
const getCourseCategories = (url: string) => {
  return axios.get(url).then(res => res.data);
}

// Updating a specific course
const updateCourseDetail = (data: any, id: any) => {
  return axios.put(`/api/courses/${id}`, data).then(res => res.data);
}

// Create a new section for a course
const createSection = async (data: any, id: any) => {
  return await axios.post(`/api/courses/${id}/sections`, data);
}

const CourseServices = {
  createCourse,
  getAllCourses,
  getCourseDetail,
  getCourseCategories,
  updateCourseDetail,
  createSection
};

export default CourseServices;
