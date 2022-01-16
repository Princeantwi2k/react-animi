import React from "react";
import { Link } from "react-router-dom";
import Signinlinks from "./Signinlinks";
import Signuplinks from "./Signuplinks";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navs">
      <h1 className="brand-logo">
        <NavLink to="/" className="brand-logo">
          RoadMaster
        </NavLink>
      </h1>
      <ul className="nav">
        <li>
          <NavLink to="/boad" className="brand-logos">
            Dashboad
          </NavLink>
        </li>
        <li>
          <NavLink to="/new" className="brand-logos">
            News Complians{" "}
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" className="brand-logos">
            News
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" className="brand-logos">
            Log in
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
