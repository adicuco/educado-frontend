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

export const createCourse = (props: CourseInterface) => {
    console.log(import.meta.env.VITE_BACKEND_URL);
    const course = {
        title: props.title,
        description: props.description,
        category: props.category,
        published: false,
    };

    return async (dispatch: Function) => {
        const res = await axios.post(`${backend_url}/api/course/create`, course);
        dispatch({ type: CREATE_COURSE, payload: res.data });
    };
};


// GET ALL COURSES
export const GET_ALL_COURSES = "GET_ALL_COURSES";

export const getAllCourses = () => {
  return async (dispatch: Function) => {
    const res = await axios.get(`${backend_url}/api/course/getall`);
    dispatch({ type: GET_ALL_COURSES, payload: res.data });
  };
};


const CourseServices = {
    createCourse,
    getAllCourses
};

export default CourseServices;