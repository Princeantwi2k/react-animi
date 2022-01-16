import { collection, addDoc } from "firebase/firestore";
import React from "react";
import { useState } from "react/cjs/react.development";
import { db } from "../Firebase/config";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useRef } from "react";

const CreateProject = () => {
  const [files, setFiles] = useState([]);
  const [newtitle, setnewtitle] = useState("");
  const [newcontent, setnewcontent] = useState("");

  const addcontent = collection(db, "projects");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(addcontent, { title: newtitle, content: newcontent });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <form className="white">
          <h5 className="grey-text  text-darken-3">comment your issue</h5>
          <div className="input-field"></div>
          <div className="input-field">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              onChange={(event) => {
                setnewtitle(event.target.value);
              }}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="content"> comment your issues</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={(event) => {
                setnewcontent(event.target.value);
              }}
              required
            ></textarea>
          </div>
          <div className="input-field">
            <button
              className="btn pink lighten z-depth-0"
              onClick={handleSubmit}
            >
              <Link to="/" className="buttom brand-logos">
                Create
              </Link>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateProject;
