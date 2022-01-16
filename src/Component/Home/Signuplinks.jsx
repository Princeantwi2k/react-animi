import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Signuplinks = () => {
  return (
    <ul className="right">
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
      <li>
        <NavLink to="/skills" className="btn btn-floating pink lighten-1">
          2k
        </NavLink>
      </li>
    </ul>
  );
};

export default Signuplinks;
