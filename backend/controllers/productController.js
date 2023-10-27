const Product = require("../models/productModel");
const asyncHandler = require("../middlewares/asynchandler");

const getProducts = asyncHandler(async (req, res) => {
  const id = req.body.id;
  const products = await Product.find({ category: id });

  res.status(200).json(products);
});

const createProduct = asyncHandler(async (req, res) => {
  const { name, price, image, category, discount, rating } = req.body;
  const product = new Product({
    name,
    price,
    image,
    category,
    discount,
    rating,
  });

  const createdProduct = product.save();
  res.status(201).json(createdProduct);
});

const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, image, category, discount, rating, id } = req.body;

  const product = await Product.findById(id);

  if (product) {
    product.name = name;
    product.price = price;
    product.rating = rating;
    product.image = image;
    product.discount = discount;
    product.category = category;
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
};
