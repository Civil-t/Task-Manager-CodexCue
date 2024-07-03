import React from "react";
import "./Header.css";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";

function Header() {
  return (
    <>
      <div className="header-container">
        <div id="header">
          <div id="search">Not sure what to do with this space yet</div>
          <div id="icons">
            <div id="notification-icon">
              <IoIosNotificationsOutline />
            </div>
            <div id="settings-icon">
              <CiSettings />
            </div>
            <div id="person-icon">
              <BsPerson />
            </div>
          </div>
        </div>
        <div id="project-details">
          <div id="details">
            <h2 id="title">Project Name</h2>
            <div id="owner">
              <button> In progress</button>
              <p>
                Client: <span>Tapiwa Chimbwanda</span>
              </p>
              <p>
                {" "}
                Owner: <span>Dombo </span>
              </p>
            </div>
          </div>
          <div id="team">
            {" "}
            Team Profile Pictures not sure if the space is not too big
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
