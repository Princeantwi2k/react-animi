import React from "react";

const ProjectDetails = (props) => {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius,
            temporibus quisquam veniam, quae possimus at ducimus, vitae dicta
            provident distinctio numquam commodi perspiciatis. Doloribus
            molestiae exercitationem non numquam aperiam dolores?
          </p>
        </div>
        <div className="card-action grey-lighten-4 grey-text">
          <div>Prince antwi</div>
          <div>2nd january 2022</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
