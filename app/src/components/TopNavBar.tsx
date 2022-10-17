import React from 'react'
import { Link } from 'react-router-dom'

export const TopNavBar = () => {
    return (
        <div className="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-300">
            <h1 className="text-lg font-medium">Educado / <span className="text-blue-500">Courses</span></h1>

            <button className="relative ml-auto text-sm focus:outline-none group">
                <div className="flex items-center justify-between w-10 h-10 rounded">
                    <div className="block relative">
                        <img
                            alt="profil"
                            src="https://www.tailwind-kit.com/images/person/1.jpg"
                            className="mx-auto object-cover rounded-full h-10 w-10 hover:rounded-lg "
                        />
                    </div>
                </div>
                <div className="absolute right-0 flex-col items-start hidden w-40 bg-white border border-gray-300 shadow-lg group-focus:flex">
                    <Link to="/profile" className="w-full px-4 py-2 text-left hover:bg-gray-300">Profile</Link>
                    <a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
                    <Link to="/login" className="w-full px-4 py-2 text-left hover:bg-gray-300">Sign out</Link>
                </div>
            </button>
        </div>
    )
}
