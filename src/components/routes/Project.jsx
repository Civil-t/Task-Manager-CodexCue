import React from "react";
import SideNav from "../SideNav/SideNav";
import "./Project.css";

function Project() {
  return (
    <>
      <div className="main-container">
        <SideNav />

        <div className="temp-container">
          <div>Tasks Header</div>
          <div> Tasks Details</div>
        </div>
      </div>
    </>
  );
}

export default Project;
