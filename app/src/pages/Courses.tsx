import React from 'react'
import useSWR from 'swr'; // next.js fetching package
import { Link } from 'react-router-dom'
// hooks
import useToggle from "../hooks/useToggle";

// Components
import Layout from '../components/Layout'
import { CourseListCard } from '../components/CourseListCard'
import { CourseCreateModal } from "../components/CourseCreateModal"

// icons
import {
  ListBulletIcon,
  PencilSquareIcon,
  Square2StackIcon
} from '@heroicons/react/24/outline';
import CourseServices from '../services/course.services';

// Demo data
const courses = [{
  id: "6335993db89fa3077a35ce82",
  category: "Programming",
  title: "Basic Python",
  description: "Python - Learn math while you commute, develop the skills you need, conquer tomorrow's job market, begin your journey today",
  cover_image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  created_at: "26 sept 2022",
  creator: {
    name: "Frederik Bode",
    image: "https://www.tailwind-kit.com/images/person/7.jpg",
    institutions: ["AAU"]
  }
}, {
  id: "6335994ac12de5eea79eefab",
  category: "Finance",
  title: "Personal Finance",
  description: "Finance - Learn math while you commute, develop the skills you need, conquer tomorrow's job market, begin your journey today",
  cover_image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  created_at: "24 sept 2022",
  creator: {
    name: "Sture Svensson",
    image: "https://www.tailwind-kit.com/images/person/6.jpg",
    institutions: ["AAU", "Google"]
  }
}]

const Courses = () => {
  // Fetch all courses
  const { data, error } = useSWR(
    "http://127.0.0.1:8888/api/course/eml/getall",
    CourseServices.getAllCourses
  );


  // states and hooks
  const [modalVisible, setModalVisible] = useToggle();
  // const [toggleLayout, setToggleLayout] = useToggle();

  // 
  const toggleCallback = () => {
    setModalVisible();
  }

  if (error) return <>"An error has occurred."</>;
  if (!data) return <>"Loading..."</>;

  console.log(data);

  return (
    <Layout>
      <div className='flex flex-row justify-between mb-8'>
        <div className='flex flex-row space-x-2'>
          <button onClick={setModalVisible} className="std-button">
            <PencilSquareIcon className='w-5 h-5' />
            <p className='font-normal'>Create new course</p>
          </button>
          {/* <button onClick={setToggleLayout} className="std-button">
            {toggleLayout ? <ListBulletIcon className='w-6 h-6'/> : <Square2StackIcon className='w-6 h-6'/>}
            {toggleLayout ? <p className='font-mono font-thin'>List View</p> : <p className='font-mono font-thin'>Grid View</p>}
          </button> */}
        </div>

        <div className="text-end">
          <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
            <div className=" relative ">
              <input
                type="text"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Looking for a course?"
              />
            </div>
            <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>

      {/** Page content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course: any, key: number) => {
          return <CourseListCard course={course} key={key} />
        })}
      </div>

      {/** Page content real data from backend */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((course: any, key: number) => {
          return <CourseListCard course={course} key={key} />
        })}
      </div>


      {/** Modal Component */}
      {modalVisible && <CourseCreateModal toggler={toggleCallback} />}
    </Layout>
  )
}

export default Courses

