const router = require("express").Router();

const { login, signup } = require("../controllers/userControllers");

//Login User
router.post("/login", login);

//Signup User
router.post("/signup", signup);


module.exports = router