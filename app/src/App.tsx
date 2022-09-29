import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Auth Pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import CourseCreate from "./pages/CourseCreate";
import CourseEdit from "./pages/CourseEdit";

// Non-auth pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

function App() {

  // router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />
    },
    {
      path: "/courses",
      element: <Courses />,
      errorElement: <NotFound />,
    },
    {
      path: "/courses/create",
      element: <CourseCreate />
    },
    {
      path: "/courses/edit/:id",
      element: <CourseEdit />
    },
    {
      path: "/courses/edit/:id/section/:id",
      element: <CourseCreate />
    },
    {
      path: "/settings",
      element: <p>settings</p>
    },
    {
      path: "/profile",
      element: <Profile />,
      errorElement: <NotFound />
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <NotFound />
    }, {
      path: "/signup",
      element: <Signup />,
      errorElement: <NotFound />
    }
  ])

  return <RouterProvider router={router} />;
}

export default App
