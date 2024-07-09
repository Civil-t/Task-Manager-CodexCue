import React, { useState } from "react";
import "./CreateTaskModal.css";
import { IoClose } from "react-icons/io5";
import tasks from "./TasksData";
import axios from "axios";

function CreateTaskModal({ closeModal }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    typeOfWork: "",
    status: "",
    priority: "",
    teamLead: "",
    assignee: "",
    deadline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send formData to the backend server
      const response = await axios.post(
        "http://localhost:5000/api/tasks",
        formData
      );
      if (response.status === 200) {
        console.log("Task created successfully", formData);
        closeModal(false);
      }
    } catch (error) {
      console.error("Failed to create task", error);
    }
  };

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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                placeholder="Enter Task Title"
                value={formData.title}
                onChange={handleChange}
              />
              <textarea
                name="description"
                placeholder="Enter Task Description"
                rows="6"
                value={formData.description}
                onChange={handleChange}
              ></textarea>

              <select
                name="typeOfWork"
                value={formData.typeOfWork}
                onChange={handleChange}
              >
                <option>Type Of Work</option>
                <option value="design">Design</option>
                <option value="development">Development</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="testing">Testing</option>
              </select>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option>Status</option>
                <option value="to-do">To Do</option>
                <option value="in-progress">In Progress</option>
                <option value="in-review">In Review</option>
                <option value="completed">Completed</option>
              </select>

              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
              >
                <option>Priority</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>

              <input
                type="text"
                name="teamLead"
                placeholder="Team Lead"
                value={formData.teamLead}
                onChange={handleChange}
              />
              <input
                type="text"
                name="assignee"
                placeholder="Assignee"
                value={formData.assignee}
                onChange={handleChange}
              />

              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
              />

              <div id="form-btns">
                <button type="button" onClick={() => closeModal(false)}>
                  Cancel
                </button>
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
