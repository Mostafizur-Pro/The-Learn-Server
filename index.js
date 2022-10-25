const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const categories = require("./data/categories.json");
const training = require("./data/training.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Webside category list
app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  console.log("categories id:", id);
  const category = training.filter((c) => c.category_id === id);
  res.send(category);
});

app.get("/training", (req, res) => {
  res.send(training);
});

app.get("/training/:id", (req, res) => {
  const id = req.params.id;
  console.log("training id:", id);
  const currentTraining = training.find((c) => c._id === id);
  res.send(currentTraining);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
