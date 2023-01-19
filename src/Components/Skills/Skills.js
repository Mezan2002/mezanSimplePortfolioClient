import React from "react";

const Skills = () => {
  return (
    <div id="skills">
      <div className="md:my-20 my-10">
        <h2 className="md:text-4xl text-xl text-center font-bold mb-5 md:mb-10 text-white">
          Skills
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 md:px-20">
          <div className="card bg-white shadow-xl">
            <div className="card-body">
              <img
                src="https://i.ibb.co/fHwTJfW/html-5-1.png"
                alt=""
                className="w-20 mx-auto"
              />
              <h2 className="text-2xl font-bold text-center">HTML</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
