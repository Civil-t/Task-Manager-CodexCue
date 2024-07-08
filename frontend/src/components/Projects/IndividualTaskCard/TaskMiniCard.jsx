import React from "react";
import "./TaskMiniCard.css";
import { IoPersonOutline } from "react-icons/io5";
import { LiaCommentSolid } from "react-icons/lia";

function TaskMiniCard() {
  return (
    <>
      <div id="individual-task">
        <div id="category-priority">
          <div id="category">Frontend</div>
          <div id="priority">High</div>
        </div>
        <div id="task-description">
          <h4>Task Title</h4>
          <div id="deadline">
            <span>Deadline: </span>12.12.23
          </div>
          <p id="description">
            FASIUFBAJFBASKJFBASKJFBASasdasdas asdasdasd sadsadmas asdasdasdas
            asdsad asdasdasd asdasdasd asdasdasd asdasdasd asdasdasd asdasdasd
          </p>
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
