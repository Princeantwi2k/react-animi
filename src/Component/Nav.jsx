import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  const [Ismobile, setIsmobile] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">RoadMaster</h1>
      <ul
        className={Ismobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsmobile(false)}
      >
        <Link to="/home" className="home">
          {" "}
          <li>Home</li>
        </Link>
        <Link to="/about" className="about">
          {" "}
          <li>About</li>
        </Link>
        <Link to="/report" className="report">
          {" "}
          <li>Reporter</li>
        </Link>
        <Link to="/skills" className="skills">
          {" "}
          <li>Skills</li>
        </Link>
        <Link to="/login" className="sign">
          {" "}
          <li>Sign up</li>
        </Link>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsmobile(!Ismobile)}
      >
        {Ismobile ? (
          <i className="bx bx-window-close"></i>
        ) : (
          <i className="bx bx-menu"></i>
        )}
      </button>
    </nav>
  );
};

export default Nav;
