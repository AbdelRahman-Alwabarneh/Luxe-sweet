const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: function () {
      return !this.googleId;
    },
  },

  googleId: {
    type: String, // Optional field for Google login
  },
  isActive: { type: Boolean, default: true },
  location: { type: String, default: null },
  image: { type: String, default: null },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  dishes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Dish", // Reference to Dish model
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
