import React, { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  return (
    <div id="skills">
      <div className="md:my-20 my-10">
        <h2 className="md:text-4xl text-xl text-center font-bold mb-5 md:mb-10 text-white">
          Skills
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 md:px-20">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="card bg-white hover:bg-base-300 hover:scale-90 duration-300 shadow-xl"
            >
              <div className="card-body">
                <img src={skill.icon} alt="" className="w-20 h-20 mx-auto" />
                <h2 className="text-2xl font-bold text-center">{skill.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
