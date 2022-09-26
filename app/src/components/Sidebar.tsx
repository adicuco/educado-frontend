import React, { ReactNode } from 'react'

// static
import Logo from "../assets/ecs-logo.png"
import { Link, useLocation } from "react-router-dom"

// icons
import { HomeIcon, BookOpenIcon, QuestionMarkCircleIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export const Sidebar = () => {
    return (
        <div className="flex flex-col items-center w-16 pb-4 overflow-auto border-r border-gray-300">
            {/** Sidebar Icon */}
            <Link to="/" className="flex items-center justify-center flex-shrink-0 w-full h-16 bg-blue-300" >
                <img src={Logo} alt="ecs-logo" className='h-6' />
            </Link>

            {/** Sidebar elements */}
            <SidebarElement path="/" icon={<HomeIcon/>}/>
            <SidebarElement path="/about" icon={<QuestionMarkCircleIcon/>}/>
            <SidebarElement path="/courses" icon={<BookOpenIcon/>}/>
            <SidebarElement path="/profile" icon={<UserCircleIcon/>}/>
        </div>
    )
}


const SidebarElement = ({path, icon}: {path:string, icon: JSX.Element})  => {
    const location = useLocation();
    return (
        <Link to={path} className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" >
            {location.pathname == path ?
                <span className='w-5 h-5 text-blue-500'>{icon}</span> :
                <span className='w-5 h-5'>{icon}</span>
            }
        </Link>
    )
}
