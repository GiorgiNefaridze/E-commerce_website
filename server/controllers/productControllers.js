const Product = require("../models/Product");

const getAllProduct = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
};

const getAllSaledProducts = async (req, res) => {
  const saledProducts = await Product.find({ saled: true });

  res.status(200).json(saledProducts);
};

const addProduct = async (req, res) => {
  res.send("send add products request");
};

const getAllProductFromCart = async (req, res) => {
  res.send("send get All Product From Cart request");
};

module.exports = {
  getAllProduct,
  addProduct,
  getAllProductFromCart,
  getAllSaledProducts,
};
