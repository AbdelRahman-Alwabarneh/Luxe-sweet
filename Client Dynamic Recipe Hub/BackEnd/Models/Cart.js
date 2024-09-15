const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  chef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chef",
    required: true,
  },
  items: [
    {
      dish: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Dish",
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
        min: 1,
      },
    },
  ],
});

// Ensure items are from the same chef
cartSchema.pre("save", async function (next) {
  const cart = this;
  const dishes = await mongoose.model("Dish").find({ _id: { $in: cart.items.map(item => item.dish) } });

  if (dishes.some(dish => dish.chef.toString() !== cart.chef.toString())) {
    return next(new Error("All items in the cart must be from the same chef."));
  }

  next();
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
