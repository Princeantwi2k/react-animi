import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Signinlinks = () => {
  return (
    <ul className="right">
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
    </ul>
  );
};

export default Signinlinks;
