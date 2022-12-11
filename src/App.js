import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
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
  ]);
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
