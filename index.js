const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const categories = require("./data/categories.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Webside category list
app.get("/categories", (req, res) => {
  res.send(categories);
});
app.get("/categories/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("categories id:", id);
  const category = categories.find((c) => c.id == id);
  res.send(category);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
