import useSWR from 'swr';
import { useNavigate } from 'react-router-dom';

// Hooks 
import useToken from '../hooks/useToken';

// Services
import CourseServices from '../services/course.services';

// Components
import Layout from '../components/Layout'
import { CourseListCard } from '../components/Courses/CourseListCard'
import { CreateCourseModal } from '../components/Courses/CreateCourseModal';
import { PageDescriptor } from '../components/PageDescriptor';
import { useState } from 'react';
import { CubeTransparentIcon } from '@heroicons/react/24/outline';

const Courses = () => {
  // States and Hooks
  const navigate = useNavigate();
  const token = useToken();

  // Fetch all courses
  const { data, error } = useSWR(
    token ? ["http://127.0.0.1:8888/api/courses/", token] : null,
    CourseServices.getAllCourses
  );

  // useSWR built in loaders
  if (error) return navigate("/login");
  if (!data) return <p>"Loading..."</p>;

  return (
    <Layout meta="Course overview">

      {/** Page Descriptor */}
      <PageDescriptor
        title="Courses"
        desc="All courses are verified by 2 experts and validated by an Educado Admin. Allegedly."
      />

      {/** Page Navbar */}
      <div className="navbar bg-none p-6">
        <div className="flex-1">
          {/** Create new courses */}
          <CreateCourseModal />
        </div>

        {/* NOT IMPLEMENTED <div className="flex-none">
          <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
            <div className=" relative ">
              <input
                type="text"
                className="input input-bordered rounded w-full max-w-xs"
                placeholder="Looking for a course?"
                onChange={() => console.log("Heyo")}
              />
            </div>
            <button className="btn btn-primary space-x-2">
              Filter
            </button>
          </form>
        </div> */}
      </div>

      {/** Page content real data from backend */}
      {data.data.length ?
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 p-6">
          {data.data.map((course: any, key: number) => <CourseListCard course={course} key={key} />)}
        </div> :
        <div className='flex flex-col space-y-8 justify-center items-center p-6'>
          <CubeTransparentIcon width={44} className="lg:mt-24 text-primary"/>
          <div className='flex flex-col text-center space-y-4'>
            <h2 className='text-2xl'>Seems like you haven't created a course yet</h2>
            <h2 className='text-sm'>You can use the 'CREATE NEW COURSE' button to get started</h2>
          </div>
        </div>
      }
    </Layout>
  )
}

export default Courses

