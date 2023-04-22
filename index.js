require("dotenv").config();
const express = require("express");
const port = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.send("Home Route");
});
app.get("/movies", (req, res) => {
  res.send("Krish, ZNMD");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
