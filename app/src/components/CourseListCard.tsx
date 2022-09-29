import React from 'react'
import { Link } from "react-router-dom";

export const CourseListCard = ({ course }: { course: { id: number, name: string } }) => {
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-full cursor-pointer m-auto">
      <Link to={`/courses/edit/${course.id}`} className="w-full block h-full">
        <img alt="blog photo" src={course.cover_image} className="max-h-40 w-full object-cover" title='hello world' />
        <div className="bg-white w-full p-4">
          <p className="text-blue-500 text-md font-medium">Video</p>
          <p className="text-gray-800 text-xl font-medium mb-2">{course.title}</p>
          <p className="text-gray-400 font-light text-md">{course.description}</p>
          <div className="flex items-center mt-4">
            <span className="block relative">
              <img alt="profil" src="https://www.tailwind-kit.com/images/person/6.jpg" className="mx-auto object-cover rounded-full h-10 w-10 " />
            </span>
            <div className="flex flex-col justify-between ml-4 text-sm">
              <p className="text-gray-800">
                {course.creator.name}
              </p>
              <p className="text-gray-400">
                {course.created_at} - 6000 min read
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
