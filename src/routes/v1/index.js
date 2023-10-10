const express = require("express");
const userRoute = require("./user.route");
const cartRoute = require("./cart.route");
const restaurantscategoryRoute = require("./restaurantcategory.route");
const productRoute = require("./product.route");
const orderRoute = require("./order.route");
const reviewRoute = require("./review.route");
const imageRoute = require("./images.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/cart", cartRoute);
router.use("/restaurantcategory", restaurantscategoryRoute);
router.use("/product", productRoute);
router.use("order", orderRoute);
router.use("/review", reviewRoute);
router.use("/image", imageRoute);

module.exports = router;