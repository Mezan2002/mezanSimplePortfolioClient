import React from "react";
import bannerImage from "../../assets/images/bannerImage.png";
import "./banner.css";
const Banner = () => {
  return (
    <div className="">
      <div className="hidden relative md:flex items-center min-h-[90vh] px-20">
        <div className="w-8/12 text-white absolute bottom-20">
          <h1 className="text-[80px] font-semibold">Hi, I am</h1>
          <h2 className="text-[80px] font-semibold text-black">
            Mezanur Rahman
          </h2>
          <p className="text-lg font-medium">
            Junior Web Developer <span className="text-black font-bold">|</span>{" "}
            MERN Stack Developer <span className="text-black font-bold">|</span>{" "}
            React JS Developer <span className="text-black font-bold">| </span>
            Front-End Developer
          </p>
        </div>
        <div className="w-4/12">
          {/* <div className="h-[420px] w-[420px] glass rounded-full mx-auto">
            <div>
              <img src={bannerBG} alt="" className="w-full" />
            </div>
          </div> */}
        </div>
      </div>
      <div className="md:hidden block mb-10">
        <div className="relative">
          <img src={bannerImage} className="w-full mt-[-90px]" alt="" />
          <div className="absolute bottom-5 left-5 text-white">
            <h2 className="md:text-[130px] text-2xl font-bold">
              Mezanur Rahman
            </h2>
            <p className="md:text-xl text-sm font-semibold">
              Junior Web Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
