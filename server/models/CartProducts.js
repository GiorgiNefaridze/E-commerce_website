const mongoose = require("mongoose");

const CartProductsSchema = new mongoose.Schema({
  userId: { type: String },
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
  saled: { type: Boolean },
  discountPrice: { type: Number },
});

const CartProductsModel = mongoose.model("cartProducts", CartProductsSchema);

module.exports = CartProductsModel;
