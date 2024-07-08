import React from "react";
import "./Dashboard.css";
import BarChart from "./BarChart";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { IoFilter } from "react-icons/io5";
import { FaBarsProgress } from "react-icons/fa6";
import { FaDiagramProject } from "react-icons/fa6";

function Dashboard() {
  const events = [
    {
      title: "Limbo Website",
      start: "2023-07-03T00:40:00",
      end: "2023-07-03T01:20:00",
    },
    {
      title: "Content iOS",
      start: "2023-07-06T04:00:00",
      end: "2023-07-06T08:00:00",
    },
    { title: "Vacation", start: "2023-07-24", end: "2023-07-28" },
    // Add more events here
  ];

  return (
    <>
      <div className="dash-container">
        <div id="nav">
          <div id="navbar">
            <h2>Dashboard</h2>
            <div id="dash-icons">
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
          <div id="hr"></div>
        </div>
        <div id="body">
          <div id="main-section">
            <div id="dash-info">
              <div className="meetings" id="progress">
                <h4>Overall Progress</h4>
                <div id="prog-circle">
                  <h1>89%</h1>
                  <h5>Progress</h5>
                </div>
              </div>
              <div className="meetings">
                <h5>Task Details</h5>
                <div id="tasks-particulas">
                  <div className="tasks-details">
                    <div className="tasks-dtls-num">9</div>
                    <div>Total Tasks</div>
                  </div>
                  <div className="tasks-details">
                    <div className="tasks-dtls-num">6</div>
                    <div>To Do</div>
                  </div>
                  <div className="tasks-details">
                    <div className="tasks-dtls-num">10</div>
                    <div>In Progress</div>
                  </div>
                  <div className="tasks-details">
                    <div className="tasks-dtls-num">8</div>
                    <div>Done</div>
                  </div>
                </div>
              </div>
              <div className="meetings">
                <h5>Today's Meetings</h5>
                <div id="meetings-particulas">
                  <div className="today-meetings">
                    <div id="time-icon">
                      <div id="meridiem-time">
                        <div id="meridiem">AM</div>
                        <div id="mtng-time">10:00</div>
                      </div>
                      <div>icon</div>
                    </div>
                    <div id="meeting-des">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed
                    </div>
                  </div>
                  <div className="today-meetings">
                    <div id="time-icon">
                      <div id="meridiem-time">
                        <div id="meridiem">AM</div>
                        <div id="mtng-time">10:00</div>
                      </div>
                      <div>icon</div>
                    </div>
                    <div id="meeting-des">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed
                    </div>
                  </div>
                  <div className="today-meetings">
                    <div id="time-icon">
                      <div id="meridiem-time">
                        <div id="meridiem">AM</div>
                        <div id="mtng-time">10:00</div>
                      </div>
                      <div>icon</div>
                    </div>
                    <div id="meeting-des">
                      Lorem ipsum dolor sit amet consectetur
                    </div>
                  </div>
                  <div className="today-meetings"></div>
                </div>
              </div>
            </div>

            <div className="schedule">
              <h4 id="schedule-header">Schedule</h4>
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={events}
                headerToolbar={{
                  left: "prev,next today",
                  center: "title",
                  right: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                eventTimeFormat={{
                  hour: "2-digit",
                  minute: "2-digit",
                  meridiem: false,
                }}
              />
            </div>
          </div>
          <div id="side-section">
            <div>
              <BarChart />
            </div>

            <div id="latest-project">
              <h4>Latest Project</h4>
              <div className="latest-progress">
                <div className="title-icon">
                  <div className="proj-icon">
                    <FaDiagramProject />
                  </div>
                  <h5>Project 1</h5>
                </div>
                <div>
                  <div className="progress-icon">
                    <div className="prog-icon">
                      <FaBarsProgress />
                    </div>
                    <p>Progress</p>
                    <p className="prog-num">9/12</p>
                  </div>
                  <div className="progress-bar"></div>
                </div>
              </div>
              <div className="latest-progress">
                <div className="title-icon">
                  <div className="proj-icon">
                    <FaDiagramProject />
                  </div>
                  <h5>Project 2</h5>
                </div>
                <div>
                  <div className="progress-icon">
                    <div className="prog-icon">
                      <FaBarsProgress />
                    </div>
                    <p>Progress</p>
                    <p className="prog-num">9/12</p>
                  </div>
                  <div className="progress-bar"></div>
                </div>
              </div>
              <div className="latest-progress">
                <div className="title-icon">
                  <div className="proj-icon">
                    <FaDiagramProject />
                  </div>
                  <h5>Project 3</h5>
                </div>
                <div>
                  <div className="progress-icon">
                    <div className="prog-icon">
                      <FaBarsProgress />
                    </div>
                    <p>Progress</p>
                    <p className="prog-num">9/12</p>
                  </div>
                  <div className="progress-bar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
