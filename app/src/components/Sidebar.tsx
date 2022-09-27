import React, { ReactNode } from 'react'
import { Link, useLocation } from "react-router-dom"

// static
import Logo from "../assets/ecs-logo.png"

// icons
import {
    HomeIcon,
    BookOpenIcon,
    UserCircleIcon
} from "@heroicons/react/24/outline";

export const Sidebar = () => {
    return (
        <div className="flex flex-col items-center w-16 pb-4 overflow-auto border-r border-gray-300">
            {/** Sidebar Icon */}
            <Link to="/" className="flex items-center justify-center flex-shrink-0 w-full h-16 bg-blue-300" >
                <img src={Logo} alt="ecs-logo" className='h-6' />
            </Link>

            {/** Sidebar elements */}
            <SidebarElement path="/" icon={<HomeIcon />} />
            <SidebarElement path="/courses" icon={<BookOpenIcon />} />
            <SidebarElement path="/profile" icon={<UserCircleIcon />} />
        </div>
    )
}


const SidebarElement = ({ path, icon }: { path: string, icon: JSX.Element }) => {
    // get the current location
    const location = useLocation();

    // matching the current path
    if (location.pathname == path) {
        return (
            <Link to={path} className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded" >
                <span className='w-5 h-5 text-green-500'>{icon}</span>
            </Link>
        )
    }

    // not matching the current path
    return (
        <Link to={path} className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" >
            <span className='w-5 h-5'>{icon}</span>
        </Link>
    )
}
