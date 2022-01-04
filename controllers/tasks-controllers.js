const sql = require("../db/connection")

const getAllTasks = (req, res) => {
  sql.query("SELECT * FROM tasks", (err, results) => {
    if (err) throw err;
    res.send({message: "Success", data: results})
  })
};

const createTask = (req, res) => {
  const { task } = req.body;
  sql.query(`INSERT INTO tasks(task) VALUES ('${task}')`, (err, results) => {
    if (err) throw err;
    res.send({ message: "Value added successully" })
  })
};

const getTask = (req, res) => {
  const { id } = req?.params;
  sql.query(`SELECT * FROM tasks WHERE id = ${id}`, (err, results) => {
    if (err) throw err;
    res.send({message: "Success", data: results})
  })
};

const updateTask = (req, res) => {
  const { task } = req.body;
  const { id } = req.params;
  sql.query(`UPDATE tasks SET task = "${task}" WHERE id = ${id}`, (err, results) => {
    if (err) throw err;
    res.send({message: "Row updated successfully!"})
  })
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  sql.query(`DELETE FROM tasks where id = ${id}`, (err, results) => {
    if (err) throw err;
    res.send({message: "Deleted row successfully"})
  })
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
