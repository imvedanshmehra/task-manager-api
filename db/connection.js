const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "vedansh@321",
  database: "task_manager",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to the DB!!");
});

module.exports = connection;
