import React from "react";
import { Link, useLocation } from "react-router-dom";

const ProjectDetails = () => {
  const location = useLocation();
  const {
    name,
    image,
    description,
    gitHubClientLink,
    gitHubServerLink,
    usedTechnologies,
    features,
    projectImages,
  } = location?.state?.project;
  return (
    <div className="card glass min-h-screen rounded-none text-white">
      <div className="card my-10 w-8/12 mx-auto glass">
        <div className="relative">
          <figure>
            <img src={image} alt="" />
            <div className="absolute top-10 left-5">
              <a title="back to home" className="btn rounded-full" href="/">
                <i class="fa-solid fa-arrow-left"></i>
              </a>
            </div>
          </figure>
        </div>
        <div className="card-body">
          <h2 className="text-3xl font-bold text-black">
            {name} by Mezanur Rahman
          </h2>
          <p className="text-black">{description}</p>
          <div>
            <h4 className="text-2xl text-black font-bold my-4">
              Project Images
            </h4>
            <div className="">
              {projectImages.map((projectImage, i) => (
                <img
                  key={i}
                  src={projectImage}
                  className="my-5 rounded-lg"
                  alt=""
                />
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-bold my-4">User Technologies</h4>
            <ul>
              {usedTechnologies.map((technology, i) => (
                <li className="list-disc list-inside" key={i}>
                  {technology}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-bold my-4">Features</h4>
            <ul>
              {features.map((feture, i) => (
                <li className="list-disc list-inside" key={i}>
                  {feture}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-actions">
            <a className="btn btn-primary" href={gitHubClientLink}>
              Client GitHub
            </a>
            <a className="btn btn-primary" href={gitHubServerLink}>
              Server GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
