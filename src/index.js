const express = require("express");
const app = require("./server");
const path = require("node:path");

app.use("/static", express.static(path.join(__dirname, "public")));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});
