import React from 'react'

// Components
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

const Courses = () => {
  return (
    <Layout>
      <div className="w-full">
        <div className="header flex items-end justify-between mb-12">
          <div className="title">
            <p className="text-4xl font-bold text-gray-800 mb-4">
              My Courses
            </p>
            <p className="text-2xl font-light text-gray-400">
              All courses are verified by 2 experts and valdiate by an Educado Admin
            </p>
          </div>
          <div className="text-end">
            <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
              <div className=" relative ">
                <input type="text" id="&quot;form-subscribe-Search" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter a title" />
              </div>
              <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
            <CourseListCard/>
            <CourseListCard/>
            <CourseListCard/>
            <CourseListCard/>
            <CourseListCard/>
            <CourseListCard/>
        </div>
      </div>

    </Layout>
  )
}

export default Courses


const CourseListCard = () => {
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
      <a href="#" className="w-full block h-full">
        <img alt="blog photo" src="https://www.tailwind-kit.com/images/blog/1.jpg" className="max-h-40 w-full object-cover" />
        <div className="bg-white w-full p-4">
          <p className="text-indigo-500 text-md font-medium">
            Video
          </p>
          <p className="text-gray-800 text-xl font-medium mb-2">
            Learn basic math skills
          </p>
          <p className="text-gray-400 font-light text-md">
            Learn math while you commute, develop the skills you need, conquer tomorrow's job market, begin your journey today
          </p>
          <div className="flex items-center mt-4">
            <a href="#" className="block relative">
              <img alt="profil" src="https://www.tailwind-kit.com/images/person/6.jpg" className="mx-auto object-cover rounded-full h-10 w-10 " />
            </a>
            <div className="flex flex-col justify-between ml-4 text-sm">
              <p className="text-gray-800 text-white">
                Matt Izzard
              </p>
              <p className="text-gray-400 text-gray-300">
                26 sept 2022 - 6000 min read
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}