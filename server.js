const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

require("dotenv").config();

app.get("/", (req, res) => {
  res.status(200).send({ status: "live" });
});

app.get("/:name", (req, res) => {
  const username = req.params.name;
  res.render("index", {
    username,
  });
});

app.listen(PORT, () => console.log(`listening on port : ${PORT}`));
