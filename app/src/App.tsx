import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Pages
import Home from "./pages/Home";

import NotFound from "./pages/NotFound";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import { Children } from "react";

function App() {

  // router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement: <NotFound/>
    },
    {
      path: "/courses",
      element: <Courses/>,
      errorElement: <NotFound/>,
      children: [
        {
          path: "create",
          element: <p>Create new course</p>
        },
        {
          path: "/courses/:id/edit/course",
          element: <p>Edit a course</p>
        },
        {
          path: "/courses/:id/edit/section",
          element: <p>Edit a section</p>
        }
      ]
    },
    {
      path: "/settings",
      element: <p>settings</p>
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
