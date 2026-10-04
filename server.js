const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Kolam backend is running!");
});

app.listen(PORT, () => {
  console.log(`Kolam backend running on port ${PORT}`);
});