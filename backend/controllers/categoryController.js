const Category = require("../models/categoryModel");
const asyncHandler = require("../middlewares/asynchandler");

const getCategory = asyncHandler(async (req, res) => {
  const categories = await Category.find();

  res.status(200).json(categories);
});

const createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const category = new Category({ name });

  const createdCategory = category.save();
  res.status(201).json(createdCategory);
});

const updateCategory = asyncHandler(async (req, res) => {
  const { name, id } = req.body;

  const category = await Category.findById(id);

  if (category) {
    category.name = name;

    const updatedCategory = await category.save();
    res.json(updatedCategory);
  } else {
    res.status(404);
    throw new Error("Category not found");
  }
});

const getCategoryById = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.body.id);
  if (category) {
    return res.json(category);
  }
  res.status(404);
  throw new Error("Resource not found");
});

module.exports = {
  getCategory,
  createCategory,
  updateCategory,
  getCategoryById,
};
