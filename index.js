const express = require("express");
const dotenv = require("dotenv");
const connectionDB = require("./db");
const cors = require("cors");

const app = express();
app.use(cors());
connectionDB();
app.get("/", (req, res) => {
  res.send("Welcome to WebBrings api section.");
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
