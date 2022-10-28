import React, { ReactNode } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import RequireAuth from './RequireAuth'
import { Sidebar } from './Sidebar'
import { TopNavBar } from './TopNavBar'
// import { OptionsBar } from './OptionsBar'

const Layout = ({ children, meta }: { children: Array<ReactNode> | ReactNode, meta: string | undefined }) => {
    const notify = () => toast("First toast");
    return (
        <RequireAuth>
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
                        {children}
                    </main>
                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
            />
        </RequireAuth>
    )
}

export default Layout