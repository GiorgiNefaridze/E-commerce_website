const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  brand: { type: String },
  price: { type: Number },
  img: { type: String },
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
});

const product = mongoose.model("product", ProductSchema);

module.exports = product;
