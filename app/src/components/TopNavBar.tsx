import React from 'react'
import { Link } from 'react-router-dom'
import useAuthStore from '../contexts/useAuthStore'

export const TopNavBar = () => {

    const clearToken = useAuthStore(state => state.clearToken);

    const links = [
        { path: "/profile", desc: "Profile" },
        { path: "/courses", desc: "Courses" },
    ]

    return (
        <div className="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-300">
            <h1 className="text-lg font-medium">Educado / <span className="text-blue-500">Courses</span></h1>

            <button className="relative ml-auto text-sm focus:outline-none group">
                <div className="flex items-center justify-between w-10 h-10 rounded">
                    <div className="block relative">
                        <img
                            alt="profil"
                            src="https://www.tailwind-kit.com/images/person/6.jpg"
                            className="mx-auto object-cover rounded-full h-10 w-10 hover:rounded-lg "
                        />
                    </div>
                </div>
                <div className="absolute right-0 flex-col items-start hidden w-40 bg-white border border-gray-300 shadow-lg group-focus:flex">
                    {links.map((route, key) => <Link to={route.path} key={key} className="w-full px-4 py-2 text-left hover:bg-blue-500 hover:text-white">{route.desc}</Link>)}
                    <a onClick={() => clearToken} className="w-full px-4 py-2 text-left hover:bg-blue-500 hover:text-white">Sign out</a>
                </div>
            </button>
        </div>
    )
}
