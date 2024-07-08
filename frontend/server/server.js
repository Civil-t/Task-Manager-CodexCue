const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const port = 5000;

app.use(bodyParser.json());

app.post("/api/tasks", (req, res) => {
  const taskData = req.body;

  // Read existing tasks from tasks.json
  fs.readFile("tasks.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading tasks file" });
    }

    const tasks = JSON.parse(data);
    tasks.push(taskData);

    // Write updated tasks to tasks.json
    fs.writeFile("tasks.json", JSON.stringify(tasks, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error writing tasks file" });
      }

      res.status(200).json({ message: "Task created successfully" });
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
