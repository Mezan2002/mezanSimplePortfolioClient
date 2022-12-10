import React from "react";
import bannerImage from "../../assets/images/bannerImage.png";

const Banner = () => {
  return (
    <div className="">
      <div className="hidden md:block">
        <div className="">
          <img src={bannerImage} className="mt-[-150px] w-full" alt="" />
        </div>
        <div className="absolute bottom-20 left-20 text-white">
          <h2 className="text-[130px] font-bold">Mezanur Rahman</h2>
          <p className="text-xl font-semibold">
            Junior Web Developer & MERN Stack Developer & React JS Developer &
            Front-End Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
