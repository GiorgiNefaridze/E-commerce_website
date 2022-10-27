const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3500;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Test Send req");
});

app.listen(port, () => console.log("Server is listening on port " + port));
