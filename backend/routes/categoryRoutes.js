const express = require("express");
const router = express.Router();
const {
  getCategory,
  createCategory,
  updateCategory,
  getCategoryById,
} = require("../controllers/categoryController");

router.route("/").get(getCategory).post(createCategory).put(updateCategory);
router.route("/find").post(getCategoryById);

module.exports = router;
