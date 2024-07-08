import React from "react";
import "./CreateTaskModal.css";
import { IoClose } from "react-icons/io5";

function CreateTaskModal({ closeModal }) {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div id="close-btn">
          <h4 id="task-title">Create Task</h4>
          <button onClick={() => closeModal(false)}>
            <IoClose />
          </button>
        </div>
        <div id="create-task-body">
          <div id="task-main-sec">
            <form>
              <input type="text" placeholder="Enter Task Title" />
              <textarea
                placeholder="Enter Task Description"
                rows="6"
              ></textarea>

              <select>
                <option>Type Of Work</option>
                <option value="design">Design</option>
                <option value="development">Development</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="testing">Testing</option>
              </select>

              <select>
                <option>Status</option>
                <option value="to-do">To Do</option>
                <option value="in-progress">In Progress</option>
                <option value="in-review">In Review</option>
                <option value="completed">Completed</option>
              </select>

              <select>
                <option>Priority</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>

              <input type="text" placeholder="Team Lead" />
              <input type="assignee" placeholder="Assignee" />

              <input type="date" placeholder="Deadline" />

              <div id="form-btns">
                <button type="submit">Cancel</button>
                <button type="submit">Create Task</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTaskModal;
