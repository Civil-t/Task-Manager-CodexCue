import React from "react";
import "./TaskMiniCard.css";
import { IoPersonOutline } from "react-icons/io5";
import { LiaCommentSolid } from "react-icons/lia";

function TaskMiniCard({ category, priority, title, deadline, description }) {
  return (
    <>
      <div id="individual-task">
        <div id="category-priority">
          <div id="category">{category}</div>
          <div id="priority">{priority}</div>
        </div>
        <div id="task-description">
          <h4>{title}</h4>
          <div id="deadline">
            <span>Deadline: </span>
            {deadline}
          </div>
          <p id="description">{description}</p>
        </div>
        <hr id="minicard-hr" />
        <div id="team-comments">
          <div id="mini-team">
            <IoPersonOutline />
          </div>
          <div id="mini-team">
            <IoPersonOutline />
          </div>
          <div id="comments">
            <LiaCommentSolid />
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskMiniCard;
