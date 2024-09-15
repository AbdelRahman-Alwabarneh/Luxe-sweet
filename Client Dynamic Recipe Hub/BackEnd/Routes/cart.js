const express = require("express");
const router = express.Router();
const { addToCart, getCart, removeFromCart } = require("../Controllers/cartcontroller");

// Route to add a dish to the cart
router.post("/add-to-cart", addToCart);

// Route to get the cart for a specific user
router.get("/get-cart/:userId", getCart);

// Route to remove a dish from the cart
router.delete("/remove-from-cart", removeFromCart);

module.exports = router;
