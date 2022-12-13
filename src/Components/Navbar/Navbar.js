import React from "react";
import { Link } from "react-router-dom";
import resume from "../../assets/Resume/MezanurRahman'sResume.pdf";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <a href="#contact">Contact Me</a>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar md:px-20 md:mt-4 justify-between">
        <a
          className="btn btn-ghost normal-case text-sm md:text-xl z-10 text-white"
          href="/"
        >
          Mezanur Rahman
        </a>
        <div className="navbar-end z-10">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 z-10 text-white">
            {navItems}
          </ul>
          <a
            class="btn ml-5 z-10"
            target="_blank"
            rel="noreferrer"
            href={resume}
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </div>
      ;
    </div>
  );
};

export default Navbar;
