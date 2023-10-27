const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const DB = require("./config/db.js");
const productRoutes = require("./routes/productRoutes.js");
const categoryRoutes = require("./routes/categoryRoutes.js");
DB.connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/products", productRoutes);
app.use("/category", categoryRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../products/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "products", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port);
