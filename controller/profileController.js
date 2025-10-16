const axios = require("axios");

exports.getProfile = async (req, res) => {
  try {
    const response = await axios.get(process.env.CAT_API, {
      timeout: 5000,
    });
    const catFact = response.data.fact;

    const userData = {
      status: "success",
      user: {
        email: process.env.EMAIL,
        name: process.env.NAME,
        stack: process.env.STACK,
      },
      timestamp: new Date().toISOString(),
      fact: catFact,
    };
    res.status(200).json(userData);
  } catch (error) {
    console.error("Cat Fact API Error:", error.message);
    res.status(500).json({
      status: "failed",
      message: "Failed to fetch cat fact.",
      timestamp: new Date().toISOString(),
    });
  }
};
