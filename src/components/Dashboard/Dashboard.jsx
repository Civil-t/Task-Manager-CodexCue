import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <div className="dash-container">
        <div id="navbar">Navbar</div>
        <div id="body">
          <div id="main-section">
            <div id="dash-info">Dashboard Info</div>
            <div id="projects-info">Projects</div>
          </div>
          <div id="side-section">Side Section</div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
