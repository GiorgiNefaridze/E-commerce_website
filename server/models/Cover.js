const mongoose = require("mongoose");

const coverSchema = new mongoose.Schema({
  img: { type: String },
});

module.exports = mongoose.model("covers", coverSchema);
