const express = require("express");
const router = express.Router();
const { getProducts } = require("../controllers/productController");

router.route("/").post(getProducts);

// .post(createProduct).put(updateProduct)

module.exports = router;
