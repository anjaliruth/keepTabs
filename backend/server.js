require("dotenv").config();
const Product = require("./ProductModel.js");
const express = require("express");

const app = express();
const PORT = 5001;
const mongoose = require("mongoose");
const cors = require("cors");
mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());
app.use(cors());

//backend routes

app.get("/items", async function (req, res) {
  try {
    const products = await Product.find();
    console.log("Products:", products);
    res.json(products);
  } catch (err) {
    console.error("Error", err);
    res.status(500).json({ message: err.message });
  }
});

app.post("/items", async function (req, res) {
  const { date, item, location } = req.body;
  const product = new Product({
    date,
    item,
    location,
  });
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    console.error("Error", err);
    res.status(400).json({ message: err.message });
  }
});

app.patch("/items/:id", async function (req, res) {
  const { date, item, location } = req.body;

  try {
    const product = await Product.findById(req.params.id);

    if (date) {
      product.date =date ;
    }
    if (item) {
      product.item =item ;
    }
    if (location) {
        product.location = location;
    }

    const updatedProduct = await product.save();
    res.status(201).json(updatedProduct);
  } catch (err) {
    console.error("Error", err);
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT} `));
