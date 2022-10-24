import React, { ReactNode } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import RequireAuth from './RequireAuth'
import { Sidebar } from './Sidebar'
import { TopNavBar } from './TopNavBar'
// import { OptionsBar } from './OptionsBar'

const Layout = ({ children, meta }: { children: Array<ReactNode> | ReactNode, meta: string }) => {
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

                        {/** Page Descriptor */}
                        <div className="header flex items-end justify-between p-6 border-b bg-white">
                            <div className="title">
                                <p className="text-3xl font-bold text-gray-800 mb-4">
                                    {meta ? <>{meta}</> : <>Educado</>}
                                </p>
                                <p className="text-xl font-light text-gray-500">
                                    All courses are verified by 2 experts and valdiate by an Educado Admin
                                </p>
                                <button className='' onClick={notify}>Click here</button>
                            </div>
                        </div>

                        {/** Main Content */}
                        <div className="overflow-x-hidden p-6">
                            {children}
                        </div>
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