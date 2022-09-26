import React, { ReactNode } from 'react'
import { OptionsBar } from './OptionsBar'

// Components
import { Sidebar } from './Sidebar'
import { TopNavBar } from './TopNavBar'

const Layout = ({children}: {children: Array<ReactNode> | ReactNode}) => {
    return (
        <div className="flex w-screen h-screen text-gray-700">
            {/** Sidebar */}
            <Sidebar/>

            {/** Extra sidebar */}
            <OptionsBar/>

            <div className="flex flex-col flex-grow">

                {/** Top Nav bar */}
                <TopNavBar/>

                {/** Content */}
                <main className="flex-grow p-6 overflow-auto bg-gray-200">
                    <div className="grid grid-cols-3 gap-6">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Layout