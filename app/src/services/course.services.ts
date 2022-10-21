import axios from "axios";

const backend_url = import.meta.env.VITE_BACKEND_URL;

// Interface for course content
export interface CourseInterface {
    title: string,
    description: string,
    category: unknown,
    published: boolean
}

// CREATE NEW COURSE
export const CREATE_COURSE = "CREATE_COURSE"; // FIXME: wth is this?

const createCourse = (props: CourseInterface) => {
    console.log(import.meta.env.VITE_BACKEND_URL);
    const course = {
        title: props.title,
        description: props.description,
        category: props.category,
        published: false,
    };

    return async () => await axios.post(`${backend_url}/api/course/create`, course);
};

// GET ALL COURSES
export const GET_ALL_COURSES = "GET_ALL_COURSES";

const getAllCourses = (url: string) => {
    return axios.get(url).then(res => res.data)
};

const getCourseDetail = (url: string) => {
    return axios.get(url).then(res => res.data)
}

const CourseServices = {
    createCourse,
    getAllCourses,
    getCourseDetail
};

export default CourseServices;