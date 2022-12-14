const Product = require("../models/Product");
const cartProduct = require("../models/CartProducts");
const coverImages = require("../models/Cover");

const getCoverImages = async (req, res) => {
  const images = await coverImages.find({});

  res.status(200).json(images);
};

const getAllProduct = async (req, res) => {
  const products = await Product.find({});

  res.status(200).json(products);
};

const getAllSaledProducts = async (req, res) => {
  const saledProducts = await Product.find({ saled: true });

  res.status(200).json(saledProducts);
};

const getSeparatedProducts = async (req, res) => {
  const { id, userId } = req.body;

  const product = await Product.findOne({ _id: id, userId });

  res.status(200).json(product);
};

const addProduct = async (req, res) => {
  const { userId, ...product } = req.body;

  try {
    const existsProuct = await cartProduct.exists({ userId, ...product });

    if (existsProuct) {
      throw new Error("Product already exists in your cart");
    }

    const addProduct = await new cartProduct({
      userId,
      ...product,
    });
    await addProduct.save();

    res.status(201).json(addProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const checkProduct = async (req, res) => {
  const { userId, productTitle } = req.body;

  const product = await cartProduct.exists({ userId, title: productTitle });

  if (product) {
    res.status(200).json({ alredyAdded: true });
  } else {
    res.status(200).json({ alredyAdded: false });
  }
};

const getAllProductFromCart = async (req, res) => {
  const { userId } = req.body;

  try {
    const products = await cartProduct.find({ userId });

    if (!products) {
      throw new Error("Product not found");
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getProductByName = async (req, res) => {
  const { name } = req.body;

  try {
    const product = await Product.find({ title: { $regex: name } });

    if (product.length < 1) {
      throw new Error("Product not found");
    }

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getProductFromCart = async (req, res) => {
  const { id } = req.body;

  try {
    const product = await cartProduct.findOne({ _id: id });

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteProductFromCart = async (req, res) => {
  const { id } = req.params;

  try {
    await cartProduct.deleteOne({ _id: id });

    const products = await cartProduct.find({});

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateProductQuantity = async (req, res) => {
  const { _id, quantity, price } = req.body;

  try {
    const updateProduct = await cartProduct.findByIdAndUpdate(
      _id,
      {
        amount: quantity,
        price: price,
      },
      { new: true }
    );

    res.status(200).json(updateProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getCoverImages,
  getAllProduct,
  addProduct,
  getAllProductFromCart,
  getAllSaledProducts,
  getSeparatedProducts,
  checkProduct,
  updateProductQuantity,
  getProductFromCart,
  getProductByName,
  deleteProductFromCart,
};
