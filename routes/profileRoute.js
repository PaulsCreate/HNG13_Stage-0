const express = require("express");
const profileController = require("../controller/profileController");

const route = express.Router();

route.get("/me", profileController.getProfile);

module.exports = route;
