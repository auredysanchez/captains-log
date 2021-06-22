const express = require("express");

const logs = require("./controllers/logsController");

const app = express();

app.use(express.json())
// app.get("/", (req, res) => {
//     res.send("Logs App!")
// })
app.use("/logs", logs);

app.get("/", (req, res) => {
  res.send("welcome to the captain's log");
});

app.get("*", (req, res) => {
  res.status(404).send("Page Not Found");
});


module.exports = app;
