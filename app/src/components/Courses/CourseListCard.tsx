import React from 'react'
import { Link } from "react-router-dom";

// interfaces
import { Course } from "../../interfaces/Course"

export const CourseListCard = ({ course }: { course: Course }) => {

  // FIXME: when backend is able to send proper links use that
  const images = [];
  images.push("https://images.unsplash.com/photo-1664575196412-ed801e8333a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80");
  images.push("https://images.unsplash.com/photo-1664448003365-e1b05ffd509d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80");
  images.push("https://plus.unsplash.com/premium_photo-1661517760211-211f319a4909?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");

  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-full cursor-pointer m-auto">
      <Link to={`/courses/edit/${course.id}`} className="w-full block h-full">
        <img src={images[Math.round(Math.random() * 2)]} alt="blog photo" className="max-h-40 w-full object-cover" />
        <div className="bg-white w-full">
          <div className='p-4'>
            <h3 className="text-blue-500 text-md font-medium">{course.category ? <>{course.category.name}</> : <>Course</>}</h3>

            {course.title.length > 25 ?
              <h2 className="text-gray-800 text-xl font-medium mb-2">{course.title.slice(0, 25)}</h2> :
              <h2 className="text-gray-800 text-xl font-medium mb-2">{course.title}</h2>
            }

            {course.description.length > 100 ?
              <p className="text-gray-400 font-light text-md">{course.description.slice(0, 80)}...</p> :
              <p className="text-gray-400 font-light text-md">{course.description}</p>
            }
          </div>

          <div className="flex items-center border-t border-gray-100 p-2">
            <span className="block relative">
              <img src="https://www.tailwind-kit.com/images/person/6.jpg" alt="profil" className="mx-auto object-cover rounded-md h-8 w-8" />
            </span>
            <div className="flex flex-col justify-between ml-4 text-sm">
              <p className="text-gray-800">{`${course.author.firstName} ${course.author.lastName && course.author.lastName}`}</p>
              <p className="text-gray-400">{"AAU"}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
