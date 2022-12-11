import React from "react";
import project1 from "../../assets/images/skillUp.png";
import project2 from "../../assets/images/khaiyalamu.png";
import project3 from "../../assets/images/safeSale.png";
import { Link } from "react-router-dom";

const Projects = () => {
  const projectsInfo = [
    {
      id: 1,
      name: "Skill Up(A Skill Learning React App)",
      description:
        "I created that project with React JS, Firebase Authentication and some more interesting features.",
      image: project1,
      projectLink: "https://skill-up-by-mezan.web.app/",
    },
    {
      id: 2,
      name: "Khaiyalamu (A Cloud Kitchen React App)",
      description:
        "This project was created by React JS, Firebase,MongoDB and has some awesome features. It is cloud kitchen react app for selling foods",

      image: project2,
      projectLink: "https://khaiyalamu-by-mezan.web.app/",
    },
    {
      id: 3,
      name: "Safe Sale (Used Mobile Resale website)",
      description:
        "This project was designed by Tailwind CSS and daisy UI, This is a MERN stack website. There are some interesting functionalities on it. Go and explore it.",
      image: project3,
      projectLink: "https://safesalebymezan.web.app/",
    },
  ];
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
                className="md:h-96 h-56 rounded-xl"
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
