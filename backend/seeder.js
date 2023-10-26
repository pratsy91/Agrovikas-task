const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");
const products = require("./data/products.js");
const Product = require("./models/productModel.js");
const categories = require("./data/categories.js");
const Category = require("./models/categoryModel.js");
const DB = require("./config/db.js");

dotenv.config();

DB.connectDB();

const importData = async () => {
  try {
    await Product.deleteMany();

    await Category.deleteMany();

    const createdCategories = await Category.insertMany(categories);
    const createdCategory = createdCategories[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, category: createdCategory };
    });

    await Product.insertMany(sampleProducts);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();
    await Category.deleteMany();
    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
