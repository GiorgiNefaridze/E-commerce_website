const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Products = require("./models/Product.js");
const CartProductsModel = require("./models/CartProducts");

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3500;

app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
  Products.find({}, (err, data) => {
    if (err) {
      res.status(500).json(err);
    }

    res.status(200).json(data);
  });
});

app.get("/product_detail/:id", async (req, res) => {
  const product_id = req.params.id;

  const appropriateProduct = await Products.findById(product_id);
  res.status(200).json(appropriateProduct);
});

app.post("/add_product_in_cart", async (req, res) => {
  const product = req.body;
  const addToCart = await CartProductsModel(product);

  await addToCart.save();

  res.status(201).json(addToCart);
});

app.get("/get_product_from_cart", (req, res) => {
  CartProductsModel.find({}, (err, data) => {
    if (err) {
      res.status(500).json(err);
    }

    res.status(200).json(data);
  });
});

app.post("/get_product_from_cart", (req, res) => {
  CartProductsModel.find({}, (err, data) => {
    if (err) {
      res.status(500).json(err);
    }

    if (req.body.id && req.body.userId) {
      const product = data?.find(
        (product) =>
          product.id === req.body.id && product.userId === req.body.userId
      );

      res.status(200).json(product);
    } else {
      res.status(500).json("Something went wrong");
    }
  });
});

app.post("/update_product_in_cart/:id", async (req, res) => {
  const id = req.params.id;

  const updatedProduct = await CartProductsModel.findByIdAndUpdate(
    id,
    {
      amount: req.body.amount,
      price: req.body.price,
    },
    { new: true }
  );

  await updatedProduct.save();

  res.status(201).json(updatedProduct);
});

app.listen(port, () => console.log("Server is listening on port " + port));
