import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Components
import RequireAuth from './RequireAuth'
import { Navbar } from './Navbar';

const Layout = ({ children, meta }: { children: Array<ReactNode> | ReactNode, meta: string | undefined }) => {
    return (
        <RequireAuth>
            <div className="flex w-screen h-screen text-gray-700">
                <div className="flex flex-col flex-grow">
                    {/** Top Nav bar */}
                    <Navbar />

                    {/** Content */}
                    <main className="flex-grow overflow-x-hidden bg-gray-100">
                        {children}
                    </main>

                    <footer className="footer footer-center p-4 bg-base-100 border-t text-base-content">
                        <div>
                            <p>Copyright © 2022 - All rights reserved by Educardo</p>
                        </div>
                    </footer>
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