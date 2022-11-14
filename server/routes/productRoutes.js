const router = require("express").Router();

const {
  getAllProduct,
  addProduct,
  getAllProductFromCart,
  getAllSaledProducts,
  getSeparatedProducts,
  checkProduct,
} = require("../controllers/productControllers");

//Get all product
router.get("/getProducts", getAllProduct);

//Get all saled products
router.get("/getSaledProducts", getAllSaledProducts);

//Get separated products
router.post("/getSeparatedProducts", getSeparatedProducts);

//Add product in cart
router.post("/addProduct", addProduct);

//Check if product is already in cart
router.post("/checkProduct", checkProduct);

//Get all product from cart
router.post("/getAllProductFromCart", getAllProductFromCart);

module.exports = router;
