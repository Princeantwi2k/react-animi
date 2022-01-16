import React from "react";
import Navbar from "../Home/Navbar";
const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <form className="white">
          <h5 className="grey-text  text-darken-3">Sign up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>

          <div className="input-field">
            <button className="btn pink lighten z-depth-0">SIGN UP</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
