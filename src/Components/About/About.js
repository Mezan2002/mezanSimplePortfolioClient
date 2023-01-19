import React from "react";
import aboutMeImage from "../../assets/images/aboutMeImage.png";
const About = () => {
  return (
    <div id="about">
      <div className="hero card glass w-11/12 mx-auto md:py-36">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="md:w-1/2">
            <img src={aboutMeImage} className="rounded-lg shadow-2xl" alt="" />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold">About Myself</h1>
            <p className="py-6 text-white">
              I am Mezanur Rahman From Bangladesh. I am a dedicated and focused
              learner. I am quick learner too. I am working on frontend
              development from last 8 months from that time I learned a lot of
              frontend development. Now I am ready to take a challenge in
              frontend development and I belive I can work for any companies as
              a frontend developer
            </p>
            <button className="btn btn-primary">Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
