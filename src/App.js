import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import Education from "./pages/Education";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/experience",
      element: <Experience />,
    },
    {
      path: "/education",
      element: <Education />,
    },
    {
      path: "/project",
      element: <Project />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
