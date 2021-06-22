const logs = require("express").Router();
// const express = require("express")
const logsArray = require("../models/log");

logs.get("/", (req, res) => {
  res.json(logsArray);
});

logs.get("/:id", (req, res) => {
  //:id its a wild card
  const { id } = req.params; // params whats the url shows
  if (logsArray[id]) {
    res.json(logsArray[id]);
  } else {
    res.redirect("/404");
  }
});

// logs.get("/:arrayIndex", (req, res) => {
//   const { arrayIndex } = req.params;
//   const filterArray = logsArray.filter((obj, i) => {
//     return obj === logsArray[arrayIndex];
//   });
//   res.json(...filterArray);
// });

logs.put("/:arrayIndex", (req, res) => {
  //updating log
  const { arrayIndex } = req.params;
  const { body } = req;
  const oldLog = logsArray[arrayIndex];
  if (oldLog) {
    logsArray[arrayIndex] = body; //updating the object at the specific index coming through the arrayindex; params
    res.json(logsArray[arrayIndex]);
  } else {
    res.redirect("/404");
  }
});

logs.post("/:arrayIndex", (req, res) => {
  // creating a log
  const { body } = req;
  logsArray.push(body); // grab the new log and store with the other logs
  const newIdx = logsArray.length - 1;
  res.json(logsArray[newIdx]);
});

logs.delete("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  if (logsArray[arrayIndex]) {
    logsArray.splice(arrayIndex, 1);
    res.status(200).json(logsArray);
  } else {
    res.redirect("/404");
  }
});

module.exports = logs;
