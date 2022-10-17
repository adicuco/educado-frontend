import React, { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../contexts/useAuthStore'
import { OptionsBar } from './OptionsBar'

// Components
import { Sidebar } from './Sidebar'
import { TopNavBar } from './TopNavBar'

const Layout = ({ children, meta }: { children: Array<ReactNode> | ReactNode, meta: string }) => {

    // Check for existing token
    //const token = useAuthStore(state => state.token);
    // const navigate = useNavigate();
    // if (!token) { return navigate("/login"); }

    return (
        <div className="flex w-screen h-screen text-gray-700">
            {/** Sidebar */}
            <Sidebar />

            {/** Extra sidebar */}
            {/* <OptionsBar /> TODO: make it work*/}

            <div className="flex flex-col flex-grow">

                {/** Top Nav bar */}
                <TopNavBar />

                {/** Content */}
                <main className="flex-grow overflow-x-hidden bg-gray-100">

                    {/** Page Descriptor */}
                    <div className="header flex items-end justify-between p-6 border-b bg-white">
                        <div className="title">
                            <p className="text-3xl font-bold text-gray-800 mb-4">
                                {meta ? <>{meta}</> : <>Educado</>}
                            </p>
                            <p className="text-xl font-light text-gray-500">
                                All courses are verified by 2 experts and valdiate by an Educado Admin
                            </p>
                        </div>
                    </div>

                    {/** Main Content */}
                    <div className="overflow-x-hidden p-6">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Layout