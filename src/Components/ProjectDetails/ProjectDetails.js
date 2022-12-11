import React from "react";
import { useLocation } from "react-router-dom";

const ProjectDetails = () => {
  const location = useLocation();
  const { name } = location?.state?.project;
  return (
    <div className="card glass min-h-screen rounded-none text-white">
      <h2>Hello From {name}</h2>
    </div>
  );
};

export default ProjectDetails;
