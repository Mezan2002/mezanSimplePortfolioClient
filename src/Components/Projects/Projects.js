import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projectsInfo, setProjectsInfo] = useState([]);
  useEffect(() => {
    fetch("ProjectDetails.json")
      .then((res) => res.json())
      .then((data) => setProjectsInfo(data));
  }, []);
  return (
    <div className="md:my-20 my-10" id="projects">
      <h2 className="md:text-4xl text-xl text-center font-bold mb-5 md:mb-10 text-white">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:px-20">
        {projectsInfo.map((project) => (
          <div
            key={project.id}
            className="card glass hover:scale-105 duration-150 card-compact shadow-xl"
          >
            <figure>
              <img
                src={project.image}
                className="md:h-96 h-64 rounded-xl"
                alt=""
              />
            </figure>
            <div className="card-body text-white">
              <h2 className="card-title">{project.name}</h2>
              <p>{project.description}</p>
              <div className="card-actions">
                <a
                  className="btn btn-primary mt-5"
                  target="_blank"
                  rel="noreferrer"
                  href={project.projectLink}
                >
                  Live Site Demo
                </a>
                <Link
                  className="btn btn-primary mt-5"
                  to="/projectDetails"
                  state={{ project: project }}
                >
                  Explore More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
