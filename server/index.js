const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Database connected successfully"));

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user");

const port = process.env.PORT || 3002;

app.listen(port, () => console.log("Server listening on port " + port));
