const express = require("express");
const router = express.Router();
const {
  getCategory,
  createCategory,
  updateCategory,
} = require("../controllers/categoryController");

router.route("/").get(getCategory).post(createCategory).put(updateCategory);

module.exports = router;
