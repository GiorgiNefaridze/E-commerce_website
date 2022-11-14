const Product = require("../models/Product");
const cartProduct = require("../models/CartProducts");

const getAllProduct = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
};

const getAllSaledProducts = async (req, res) => {
  const saledProducts = await Product.find({ saled: true });

  res.status(200).json(saledProducts);
};

const getSeparatedProducts = async (req, res) => {
  const { id } = req.body;
  const product = await Product.findOne({ _id: id });

  res.status(200).json(product);
};

const addProduct = async (req, res) => {
  const { userId, ...product } = req.body;

  try {
    const findProduct = await Product.findOne({ userId, ...product });

    if (findProduct) {
      throw new Error("Product already exists in your cart");
    }

    const addProduct = await new cartProduct({ userId, ...product });
    await addProduct.save();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllProductFromCart = async (req, res) => {
  res.send("send get All Product From Cart request");
};

module.exports = {
  getAllProduct,
  addProduct,
  getAllProductFromCart,
  getAllSaledProducts,
  getSeparatedProducts,
};
