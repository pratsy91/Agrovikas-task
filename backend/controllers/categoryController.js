const Category = require("../models/categoryModel");
const asyncHandler = require("../middlewares/asynchandler");

const getCategory = asyncHandler(async (req, res) => {
  const categories = await Category.find();

  res.status(200).json(categories);
});

module.exports = {
  getCategory,
};
