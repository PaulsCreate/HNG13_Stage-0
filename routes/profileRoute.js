const express = require("express");
const profileController = require("../controller/profileController");

const route = express.Router();

route.get("/me", profileController.getProfile);
route.get("/", (req, res) => {
  res.send("Welcome to Paul Yusuf's Stage 0 API 😎");
});

module.exports = route;
