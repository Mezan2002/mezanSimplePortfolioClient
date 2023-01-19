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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 md:px-20 px-5">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="card bg-white hover:bg-base-300 hover:scale-90 duration-300 md:w-72 md:h-48 w-40 
              h-[190px] shadow-xl"
            >
              <div className="card-body">
                <img src={skill.icon} alt="" className="w-20 h-20 mx-auto" />
                <h2 className="md:text-2xl md:font-bold text-center text-base font-semibold">
                  {skill.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
