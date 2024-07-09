import React from "react";
import "./TaskDetails.css";

function TaskDetails(props) {
  const {
    taskName,
    team,
    status,
    lead,
    assignee,
    createdDate,
    updatedDate,
    deadline,
    description,
  } = props;

  return (
    <div className="details-container">
      <div id="task-name">
        <h4>{taskName}</h4>
        <div className="hr"></div>
      </div>
      <div id="task-details">
        <div>
          <h4>Details</h4>
          <div>
            <span>Team:</span>
            <span className="detail-info">{team}</span>
          </div>
          <div>
            <span>Status:</span>
            <span className="detail-info">{status}</span>{" "}
          </div>
          <div>
            <span>Lead:</span>
            <span className="detail-info">{lead}</span>{" "}
          </div>
          <div>
            <span>Assignee:</span>
            <span className="detail-info">{assignee}</span>{" "}
          </div>
        </div>{" "}
        <div className="hr"></div>
      </div>
      <div id="task-dates">
        <div>
          <h4>Dates</h4>
          <div>
            <span>Created:</span>
            <span className="detail-info">{createdDate}</span>
          </div>
          <div>
            <span>Updated:</span>
            <span className="detail-info">{updatedDate}</span>{" "}
          </div>
          <div>
            <span>Deadline:</span>
            <span className="detail-info">{deadline}</span>
          </div>
        </div>{" "}
        <div className="hr"></div>
      </div>
      <div id="task-descr">
        <h4>Description</h4>
        <div id="detailed-descr">{description}</div> <div className="hr"></div>
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
