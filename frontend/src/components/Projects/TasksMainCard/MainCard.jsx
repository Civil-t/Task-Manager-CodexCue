import React, { useState, useEffect } from "react";
import "./Main.css";
import MiniCard from "../IndividualTaskCard/TaskMiniCard";
import TaskDetails from "../TaskDetailsCard/TaskDetails";
import CreateTaskModal from "./CreateTaskModal";
import axios from "axios";

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
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/tasks");
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks", error);
      }
    };

    fetchTasks();

    const savedTask = localStorage.getItem("selectedTask");
    if (savedTask) {
      setSelectedTask(JSON.parse(savedTask));
    }
  }, []);

  useEffect(() => {
    if (selectedTask) {
      localStorage.setItem("selectedTask", JSON.stringify(selectedTask));
    }
  }, [selectedTask]);

  const renderTasks = (status) => {
    return tasks
      .filter((task) => task.status === status)
      .map((task, index) => (
        <MiniCard
          key={index}
          category={task.typeOfWork}
          priority={task.priority}
          title={task.title}
          deadline={task.deadline}
          description={task.description}
          onClick={() => handleTaskClick(task)}
        />
      ));
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  return (
    <>
      <div id="main-container">
        <div id="ribbon">
          <div id="ribbon-details">
            <div id="menu">
              <div>Tasks</div>
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
              <button onClick={() => setShowModal(true)}>
                <MdOutlinePostAdd />
                Add Task
              </button>
              {showModal && <CreateTaskModal closeModal={setShowModal} />}
            </div>
          </div>
          <hr />
        </div>

        <div className="category">
          <div>
            <FcTodoList />
            To Do{" "}
            <div>{tasks.filter((task) => task.status === "to-do").length}</div>
            <PiDotsThreeBold id="task-option" />
          </div>
          <div>
            <GiProgression />
            In Progress
            <div>
              {tasks.filter((task) => task.status === "in-progress").length}
            </div>
            <PiDotsThreeBold id="task-option" />
          </div>
          <div>
            <PiChatCenteredDotsThin />
            In Review{" "}
            <div>
              {tasks.filter((task) => task.status === "in-review").length}
            </div>
            <PiDotsThreeBold id="task-option" />
          </div>
          <div>
            <MdDone />
            Done{" "}
            <div>
              {tasks.filter((task) => task.status === "completed").length}
            </div>
            <PiDotsThreeBold id="task-option" />
          </div>
        </div>
        <div id="task-cards">
          <div id="todo-cards">{renderTasks("to-do")}</div>
          <div id="in-progress-cards">{renderTasks("in-progress")}</div>
          <div id="in-review-cards">{renderTasks("in-review")}</div>
          <div id="done-cards">{renderTasks("completed")}</div>
        </div>
      </div>
      {selectedTask && (
        <TaskDetails
          taskName={selectedTask.title}
          team={selectedTask.typeOfWork}
          status={selectedTask.status}
          lead={selectedTask.teamLead}
          assignee={selectedTask.assignee}
          createdDate={selectedTask.createdDate}
          updatedDate={selectedTask.updatedDate}
          deadline={selectedTask.deadline}
          description={selectedTask.description}
        />
      )}
    </>
  );
}

export default MainCard;
