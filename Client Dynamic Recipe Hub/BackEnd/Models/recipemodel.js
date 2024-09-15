const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: String,
        required: true,
      },
    },
  ],
  instructions: {
    type: String,
    required: true,
  },
  cookingTime: {
    type: Number,
    required: true,
  },
  categories: [
    {
      type: String,
      required: true,
    },
  ],
  cuisine: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cuisine",
    required: true,
  },
  images: [
    {
      type: String,
    },
  ],
  ratings: {
    type: [
      {
        isliked: [{ type: Boolean, default: false }],
        likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        Favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        comments: [
          {
            text: String,
            user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            createdAt: { type: Date, default: Date.now },
            replies: [
              {
                text: { type: String, default: "" },
                user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
                createdAt: { type: Date, default: Date.now },
              },
            ],
          },
        ],
        reportFlag: {
          isReported: { type: Boolean, default: false },
          reports: [
            {
              reason: {
                type: String,
                enum: ["inappropriate", "offensive", "spam", "other"],
              },
              user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
              createdAt: { type: Date, default: Date.now },
            },
          ],
        },
      },
    ],
    default: [{}], // Initialize with an empty object
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chef",
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  show: {
    type: Boolean,
    default: false,
  },
});

recipeSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
