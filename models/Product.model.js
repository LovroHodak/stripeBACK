const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  countInStock: {
    type: Number,
  },
  imageUrl: {
    type: String,
  },
});

const Product = mongoose.model("proDuckt", productSchema);

module.exports = Product;
