import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <div className="card rounded-none glass app">
        <Navbar></Navbar>
        <Banner></Banner>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
