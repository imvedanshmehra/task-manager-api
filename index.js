const express = require("express");
require("dotenv").config();
const tasksRoutes = require("./routes/tasks-routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use("/api/v1", tasksRoutes);

app.get("/", (req, res) => {
    res.send("<a href='/api/v1'>Click here to go to the task manager API</a>")
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
