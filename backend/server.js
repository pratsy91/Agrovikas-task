const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const DB = require("./config/db.js");
const productRoutes = require("./routes/productRoutes.js");
const categoryRoutes = require("./routes/categoryRoutes.js");
DB.connectDB();

const app = express();
app.use(express.json());
app.use("/products", productRoutes);
app.use("/category", categoryRoutes);

app.listen(5000);
