const router = require("express").Router();

const {
  getAllProduct,
  addProduct,
  getAllProductFromCart,
  getAllSaledProducts,
} = require("../controllers/productControllers");

//Get all product
router.get("/getProducts", getAllProduct);

//Get all saled products
router.get("/getSaledProducts", getAllSaledProducts);

//Add product in cart
router.post("/addProduct", addProduct);

//Get all product from cart
router.post("/getAllProductFromCart", getAllProductFromCart);

module.exports = router;
