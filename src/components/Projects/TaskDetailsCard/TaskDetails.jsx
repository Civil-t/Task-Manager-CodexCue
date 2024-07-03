import React from "react";
import "./TaskDetails.css";

function TaskDetails() {
  return (
    <div className="details-container">
      <div id="task-name">
        <h4>Task Name </h4>
        <div className="hr"></div>
      </div>
      <div id="task-details">
        <div>
          <h4>Details</h4>
          <div>
            <span> Team:</span>
            <span className="detail-info">Hello</span>
          </div>
          <div>
            <span> Status:</span>
            <span className="detail-info">Hello</span>{" "}
          </div>
          <div>
            <span>Lead:</span>
            <span className="detail-info">Hello</span>{" "}
          </div>
          <div>
            <span>Assignee:</span>
            <span className="detail-info">Hello</span>{" "}
          </div>
        </div>{" "}
        <div className="hr"></div>
      </div>
      <div id="task-dates">
        <div>
          <h4>Dates</h4>
          <div>
            <span>Created:</span>
            <span className="detail-info">Hello</span>
          </div>
          <div>
            <span>Updated:</span>
            <span className="detail-info">Hello</span>{" "}
          </div>
          <div>
            {" "}
            <span>Deadline:</span>
            <span className="detail-info">Hello</span>
          </div>
        </div>{" "}
        <div className="hr"></div>
      </div>
      <div id="task-descr">
        <h4>Description</h4>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod optio
          voluptatibus delectus dicta enim error veniam ad mollitia vitae!
          Placeat nihil explicabo vitae, eaque blanditiis ducimus ut nobis
          obcaecati voluptate?
        </div>{" "}
        <div className="hr"></div>
      </div>

      <div id="task-comments">
        <div>
          <h4>Comments</h4>
          <input type="text" placeholder="Add a comment" />
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;
