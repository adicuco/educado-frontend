import React, { ReactNode } from 'react'
import { OptionsBar } from './OptionsBar'

// Components
import { Sidebar } from './Sidebar'
import { TopNavBar } from './TopNavBar'

const Layout = ({ children }: { children: Array<ReactNode> | ReactNode }) => {
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
                <main className="flex-grow p-6 overflow-x-hidden bg-gray-100">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout