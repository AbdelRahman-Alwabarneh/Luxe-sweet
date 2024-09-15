const Cart = require("../Models/Cart");
const Dish = require("../models/DishModel");

const addToCart = async (req, res) => {
  const { userId, dishId, quantity } = req.body;

  try {
    const dish = await Dish.findById(dishId);
    if (!dish) {
      return res.status(404).json({ message: "Dish not found" });
    }

    let cart = await Cart.findOne({ user: userId });

    if (cart) {
      // Check if the dish belongs to the same chef
      if (cart.chef.toString() !== dish.chef.toString()) {
        return res.status(400).json({ message: "You can only add items from the same chef." });
      }

      const existingItem = cart.items.find(item => item.dish.toString() === dishId);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.items.push({ dish: dishId, quantity });
      }
    } else {
      cart = new Cart({
        user: userId,
        chef: dish.chef,
        items: [{ dish: dishId, quantity }],
      });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

const getCart = async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await Cart.findOne({ user: userId }).populate("items.dish");
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

const removeFromCart = async (req, res) => {
  const { userId, dishId } = req.body;

  try {
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = cart.items.filter(item => item.dish.toString() !== dishId);

    if (cart.items.length === 0) {
      await cart.remove();
      return res.status(200).json({ message: "Cart is now empty and has been removed." });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

module.exports = {
  addToCart,
  getCart,
  removeFromCart,
};
