import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div>
      <div className="card rounded-none glass app">
        <Navbar></Navbar>
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
