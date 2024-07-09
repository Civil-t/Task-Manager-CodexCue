import React from "react";
import SideNav from "../SideNav/SideNav";
import TaskHeader from "../Projects/TasksHeader/Header";
import TaskMainCard from "../Projects/TasksMainCard/MainCard";
import "./Project.css";

function Project() {
  return (
    <>
      <div className="main-container">
        <SideNav />

        <div className="temp-container">
          <TaskHeader />
          <div className="tasks">
            <TaskMainCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
