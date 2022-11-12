const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String },
  brand: { type: String },
  price: { type: Number },
  listImg: { type: [String] },
  spec: {
    rate: { type: String },
    type: { type: String },
    dpType: { type: String },
    ssd: { type: String },
  },
  amount: { type: Number },
  inStock: { type: Boolean },
  discountPrice: { type: Number },
  saled: { type: Boolean },
});

module.exports = mongoose.model("products", productSchema);
