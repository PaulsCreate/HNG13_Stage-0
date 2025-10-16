const axios = require("axios");
const { timeStamp } = require("console");
const dotenv = require("dotenv");
dotenv.config();

exports.getProfile = async (req, res) => {
  try {
    //  console.log("API", process.env.CAT_API);
    const response = await axios.get(process.env.CAT_API, {
      timeout: 5000,
    });
    const catFact = response.data.fact;

    const userData = {
      status: "Success",
      user: {
        email: process.env.EMAIL,
        name: process.env.NAME,
        stack: process.env.STACK,
      },
      timeStamp: new Date().toISOString(),
      fact: catFact,
    };
    res.status(200).json(userData);
  } catch (error) {
    console.error("Cat Fact API Error:", error.message);
    res.status(500).json({
      status: "failed",
      message: "Failed to fetch cat fact.",
      timeStamp: new Date().toISOString(),
    });
  }
};
