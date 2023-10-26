const express = require("express");
const router = express.Router();
const { getCategory } = require("../controllers/categoryController");

router.route("/").get(getCategory);

module.exports = router;
