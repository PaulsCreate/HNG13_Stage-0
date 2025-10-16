const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./conf.env" });
const app = require("./app");

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Server Listening at port ${port}`);
});
