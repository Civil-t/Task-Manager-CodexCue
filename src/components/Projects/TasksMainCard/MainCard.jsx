import React from "react";
import "./Main.css";
import MiniCard from "../IndividualTaskCard/TaskMiniCard";

import { PiDotsNine } from "react-icons/pi";
import { IoFilter } from "react-icons/io5";
import { BsSortDownAlt } from "react-icons/bs";
import { MdOutlinePostAdd } from "react-icons/md";
import { FcTodoList } from "react-icons/fc";
import { GiProgression } from "react-icons/gi";
import { PiChatCenteredDotsThin } from "react-icons/pi";
import { MdDone } from "react-icons/md";
import { PiDotsThreeBold } from "react-icons/pi";

function MainCard() {
  return (
    <>
      <div id="main-container">
        <div id="ribbon">
          <div id="ribbon-details">
            <div id="menu">
              <div>Tasks</div>
              <div>Calendar</div>
            </div>
            <div id="ui-controls">
              <div>
                <PiDotsNine /> <p>View</p>
              </div>
              <div>
                <IoFilter />
                <p>Filter</p>
              </div>
              <div>
                <BsSortDownAlt />
                <p>Sort</p>{" "}
              </div>
              <button>
                <MdOutlinePostAdd />
                Add Task
              </button>
            </div>
          </div>
          <hr />
        </div>

        <div className="category">
          {" "}
          <div>
            <FcTodoList />
            To Do <div>1</div>
            <PiDotsThreeBold id="task-option" />
          </div>
          <div>
            <GiProgression />
            In Progress<div>2</div>
            <PiDotsThreeBold id="task-option" />
          </div>
          <div>
            {" "}
            <PiChatCenteredDotsThin />
            In Review <div>5</div>
            <PiDotsThreeBold id="task-option" />
          </div>
          <div>
            <MdDone />
            Done <div>3</div>
            <PiDotsThreeBold id="task-option" />
          </div>
        </div>
        <div id="task-cards">
          <div id="todo-cards">
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </div>
          <div id="in-progress-cards">
            <MiniCard />
          </div>
          <div id="in-review-cards">
            <MiniCard />
          </div>
          <div id="done-cards">
            <MiniCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainCard;
