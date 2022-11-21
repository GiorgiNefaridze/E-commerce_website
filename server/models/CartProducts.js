const mongoose = require("mongoose");

const cartProductsSchema = new mongoose.Schema({
  title: { type: String },
  brand: { type: String },
  price: { type: Number },
  listImg: { type: [String] },
  img: { type: String },
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
  userId: { type: String, required: true },
  originalPrice: { type: Number },
});

module.exports = mongoose.model("cartProducts", cartProductsSchema);
