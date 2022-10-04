import React from 'react'
import { Link } from "react-router-dom";

// interfaces
import { Course } from "../interfaces/Course"

export const CourseListCard = ({ course }: { course: Course }) => {
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-full cursor-pointer m-auto">
      <Link to={`/courses/edit/${course.id}`} className="w-full block h-full">
        <img src={course.coverImg} alt="blog photo" className="max-h-40 w-full object-cover" />
        <div className="bg-white w-full p-4">
          <h3 className="text-blue-500 text-md font-medium">Video</h3>
          <h2 className="text-gray-800 text-xl font-medium mb-2">{course.title}</h2>
          <h2 className="text-red-500 text-xl font-medium mb-2">{course.category}</h2>
            {course.description.length > 100 ?
              <p className="text-gray-400 font-light text-md">{course.description.slice(0,80)}...</p> :
              <p className="text-gray-400 font-light text-md">{course.description}</p>
            }

          <div className="flex items-center mt-4">
            <span className="block relative">
              <img src="https://www.tailwind-kit.com/images/person/6.jpg" alt="profil" className="mx-auto object-cover rounded-full h-10 w-10 " />
            </span>
            <div className="flex flex-col justify-between ml-4 text-sm">
              <p className="text-gray-800">{course._user.googleID}</p>
              <p className="text-gray-400">{course.dateCreated} - 6000 min read</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
