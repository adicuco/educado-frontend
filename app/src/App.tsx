import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

function App() {

  // router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement: <NotFound/>
    },
    {
      path: "/about",
      element: <About/>,
      errorElement: <NotFound/>
    },
    {
      path: "/courses",
      element: <Courses/>,
      errorElement: <NotFound/>
    },
    {
      path: "/profile",
      element: <Profile/>,
      errorElement: <NotFound/>
    },
    {
      path: "/login",
      element: <Login/>,
      errorElement: <NotFound/>
    }
  ])

  return <RouterProvider router={router} />;
}

export default App
