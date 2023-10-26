const Product = require("../models/productModel");
const asyncHandler = require("../middlewares/asynchandler");

const getProducts = asyncHandler(async (req, res) => {
  const id = req.body.id;
  const products = await Product.find({ category: id });

  res.status(200).json(products);
});

const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, image, category } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

module.exports = {
  getProducts,
};
