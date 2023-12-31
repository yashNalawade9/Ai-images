const PORT = 8000;
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();

const { Configuration, OpenAIApi } = require("openai");

// Create a configuration object
const configuration = new Configuration({
  apiKey: process.env.API_KEY, // Replace with your actual API key
});

// Create an instance of the OpenAIApi using the configuration
const openai = new OpenAIApi(configuration);

app.post("/images", async (req, res) => {
  try {
    const response = await openai.createImage({
      prompt: req.body.message,
      n: 5,
      size: "1024x1024",
    });
    console.log(response.data.data);
    res.send(response.data.data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => console.log("your server is running on port" + PORT));
