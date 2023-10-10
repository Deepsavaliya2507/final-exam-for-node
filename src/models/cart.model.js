const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    product: {
      type: String,
      trim: true,
    },
    restaurant_owner_id: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    state: {
      type: String,
      trim: true,
    },
    zipcode: {
      type: Number,
      trim: true,
    },
    contact_number: {
      type: Number,
      trim: true,
    },
    owner_number: {
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

const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;
