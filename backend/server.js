const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function loadJSON(filename = "data.json") {
  return JSON.parse(
    fs.existsSync(filename) ? fs.readFileSync(filename).toString() : "[]"
  );
}

function saveJSON(filename = "data.json", json = "[]") {
  return fs.writeFileSync(filename, JSON.stringify(json, null, 2));
}

app.post("/api/tasks", (req, res) => {
  const formData = req.body;

  // Load existing tasks
  const tasks = loadJSON("data.json");

  // Append new task
  tasks.push(formData);

  // Save updated tasks
  saveJSON("data.json", tasks);

  console.log("Task saved successfully");
  res.status(200).json({ message: "Task created successfully" });
});

// endpoint to retrieve tasks
app.get("/api/tasks", (req, res) => {
  const tasks = loadJSON("data.json");
  res.status(200).json(tasks);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
