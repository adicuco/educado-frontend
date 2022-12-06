import axios from "axios";

// Interface for posting course content
export interface CourseInterface {
  title: string;
  description: string;
}

// Create a new course
const createCourse = async (props: CourseInterface, token: string) => {
  return await axios.post("/api/courses", {
    title: props.title,
    description: props.description,
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

// Get all courses
const getAllCourses = (url: string, token: string) => {
  return axios.get(url, { headers: { Authorization: `Bearer ${token}` } })
    .then(res => res.data);
};

// Get course detail
const getCourseDetail = (url: string, token: string) => {
  return axios.get(url, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => res.data);
};

// Get course categories
const getCourseCategories = (url: string, token: string) => {
  return axios.get(url, { headers: { Authorization: `Bearer ${token}` } })
    .then(res => res.data);
}

// Updating a specific course
const updateCourseDetail = (data: any, id: any, token: string) => {
  return axios.put(`/api/courses/${id}`, data, { headers: { Authorization: `Bearer ${token}` } })
    .then(res => res.data);
}

// Create a new section for a course
const createSection = async (data: any, id: any, token: string) => {
  return await axios.post(`/api/courses/${id}/sections`, data, { headers: { Authorization: `Bearer ${token}` } });
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
