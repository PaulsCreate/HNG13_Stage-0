const express = require("express");
const rateLimit = require("express-rate-limit");
const profileRoute = require("./routes/profileRoute");

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // Limit each IP to 50 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(limiter)
app.use(express.json());

app.use("/api/", limiter, profileRoute);

module.exports = app;
