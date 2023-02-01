import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import Home from "./Components/Home/Home";
import ProjectDetails from "./Components/ProjectDetails/ProjectDetails";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/projectDetails",
      element: <ProjectDetails></ProjectDetails>,
    },
    {
      path: "/blogs",
      element: <Blog></Blog>,
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
