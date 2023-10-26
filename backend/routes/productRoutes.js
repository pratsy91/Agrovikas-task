const express = require("express");
const router = express.Router();
const {
  getProducts,
  createProduct,
  updateProduct,
} = require("../controllers/productController");

router.route("/").post(getProducts);

router.route("/edit").post(createProduct).put(updateProduct);

module.exports = router;
