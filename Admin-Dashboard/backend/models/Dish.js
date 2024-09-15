// const mongoose = require('mongoose');

// const dishSchema = new mongoose.Schema({
//   name: { 
//     type: String
//   },
//   description: String,
//   price: { 
//     type: Number 
//   },
//   chef: { 
//     type: mongoose.Schema.Types.ObjectId, 
//     ref: 'Chef' 
//   },
//   approved: { 
//     type: Boolean, 
//     default: false 
//   },
//   isDeleted: { 
//     type: Boolean, 
//     default: false 
//   }, 
//   images: [
//     {
//       type: String
//     },
//   ],
//   availableQuantity: {
//     type: Number,
//     default: 0,
//   },
//   size: {
//     type: String,
//     enum: ['small', 'medium', 'large'], 
//     default: 'medium',
//   },
//   cuisine: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Cuisine',
//   },
//   orderCount: {
//     type: Number,
//     default: 0,
//   }
// });

// const Dish = mongoose.model('Dish', dishSchema);

// module.exports = Dish;



// const mongoose = require("mongoose");

// // Define the schema for a Dish
// const dishSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   description: String,
//   price: {
//     type: Number,
//     required: true,
//   },
//   chef: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Chef",
//   },
//   approved: {
//     type: Boolean,
//     default: false,
//   },
//   isDeleted: {
//     type: Boolean,
//     default: false,
//   }, // Soft delete field
//   images: [
//     {
//       type: String,
//     },
//   ],
//   availableQuantity: {
//     type: Number,
//     default: 0,
//   },
//   size: {
//     type: String,
//     enum: ["small", "medium", "large"], // example sizes, you can customize this
//     default: "medium",
//   },
//   cuisine: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Cuisine",
//   },
//   ratings: [
//     {
//       likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
//       comments: [
//         {
//           text: String,
//           user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//           createdAt: { type: Date, default: Date.now },
//           replies: [
//             {
//               text: String,
//               user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//               createdAt: { type: Date, default: Date.now },
//             },
//           ],
//         },
//       ],
//       reportFlag: {
//         isReported: { type: Boolean, default: false },
//         reports: [
//           {
//             reason: {
//               type: String,
//               enum: ["inappropriate", "offensive", "spam", "other"],
//             },
//             user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//             createdAt: { type: Date, default: Date.now },
//           },
//         ],
//       },
//     },
//   ],
//   orderCount: {
//     type: Number,
//     default: 0,
//   },
//   show: {
//     type: Boolean,
//     default: false,
//   },
// });

// // Compile and export the Dish model
// const Dish = mongoose.model("Dish", dishSchema);

// module.exports = Dish;

////////////////////////////////abedalmajeed////////////


// const mongoose = require("mongoose");

// // Define the schema for a Dish
// const dishSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   description: String,
//   price: {
//     type: Number,
//     required: true,
//   },
//   chef: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Chef",
//   },
//   approved: {
//     type: Boolean,
//     default: false,
//   },
//   isDeleted: {
//     type: Boolean,
//     default: false,
//   }, // Soft delete field
//   images: [
//     {
//       type: String,
//     },
//   ],
//   availableQuantity: {
//     type: Number,
//     default: 0,
//   },
//   size: {
//     type: String,
//     enum: ["small", "medium", "large"], // example sizes, you can customize this
//     default: "medium",
//   },
//   cuisine: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Cuisine",
//   },
//   ratings: {
//     type: [
//       {
//         likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
//         comments: [
//           {
//             text: String,
//             user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//             createdAt: { type: Date, default: Date.now },
//             replies: [
//               {
//                 text: { type: String, default: "" },
//                 user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//                 createdAt: { type: Date, default: Date.now },
//               },
//             ],
//           },
//         ],
//         reportFlag: {
//           isReported: { type: Boolean, default: false },
//           reports: [
//             {
//               reason: {
//                 type: String,
//                 enum: ["inappropriate", "offensive", "spam", "other"],
//                 response: { type: String },

//               },
//               user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//               createdAt: { type: Date, default: Date.now },
//             },
//           ],
//         },
//       },
//     ],
//     default: [{}], // Initialize with an empty object
//   },
//   orderCount: {
//     type: Number,
//     default: 0,
//   },
//   show: {
//     type: Boolean,
//     default: false,
//   },
// });

// // Compile and export the Dish model
// const Dish = mongoose.model("Dish", dishSchema);

// module.exports = Dish;


const mongoose = require("mongoose");

// Define the schema for a Dish
const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  chef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chef",
  },
  approved: {
    type: Boolean,
    default: false,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  }, // Soft delete field
  images: [
    {
      type: String,
    },
  ],
  availableQuantity: {
    type: Number,
    default: 0,
  },
  size: {
    type: String,
    enum: ["small", "medium", "large"], // example sizes, you can customize this
    default: "medium",
  },
  cuisine: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cuisine",
  },
  ratings: {
    type: [
      {
        likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
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
                 response: { type: String },

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
  orderCount: {
    type: Number,
    default: 0,
  },
  show: {
    type: Boolean,
    default: false,
  },
});

// Compile and export the Dish model
const Dish = mongoose.model("Dish", dishSchema);

module.exports = Dish;