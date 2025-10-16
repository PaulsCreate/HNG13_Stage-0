const express = require("express");
const profileRoute = require("./routes/profileRoute");

const app = express();

app.use(express.json());

app.use("/api/", profileRoute);

module.exports = app;
