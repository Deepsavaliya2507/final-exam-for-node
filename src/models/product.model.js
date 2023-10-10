const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    restaurants: {
      type: mongoose.Types.ObjectId,
      ref: "restaurants",
    },
    product_name: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: String,
      trim: true,
    },
    quantity: {
      type: Number,
      trim: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Product = mongoose.model("product", productSchema);
module.exports = Product;
