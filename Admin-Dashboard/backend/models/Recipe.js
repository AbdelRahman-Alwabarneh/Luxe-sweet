// const mongoose = require('mongoose');

// const recipeSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   status: { type: String, enum: ['approved', 'disapproved', 'pending'], default: 'pending' },
// });

// module.exports = mongoose.model('Recipe', recipeSchema);


// const mongoose = require('mongoose');


// const recipeSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   ingredients: [
//     {
//       name: {
//         type: String,
//         required: true,
//       },
//       quantity: {
//         type: String,
//         required: true,
//       },
//     },
//   ],
//   instructions: {
//     type: String,
//     required: true,
//   },
//   cookingTime: {
//     type: Number, 
//     required: true,
//   },
//   categories: [
//     {
//       type: String,
//       required: true,
//     },
//   ],
//   cuisine: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Cuisine',
//     required: true,
//   },
//   images: [
//     {
//       type: String,
//     },
//   ],
//   ratings: [
//     {
//       rating: {
//         type: Number,
//         default: null
//       },
//       comment: {
//         type: String,
//         default: null
//       },
//       user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         default: null
//       },
//     },
//   ],
//   createdBy: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Chef', 
//     default: null
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now,
//   },
//   isApproved: {
//     type: Boolean,
//     default: false, 
//   },
//   isDeleted: {
//     type: Boolean,
//     default: false, 
//   },
// });


// recipeSchema.pre('save', function (next) {
//   this.updatedAt = Date.now();
//   next();
// });


// const Recipe = mongoose.model('Recipe', recipeSchema);


// module.exports =  Recipe;


// const mongoose = require("mongoose");

// const recipeSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   ingredients: [
//     {
//       name: {
//         type: String,
//         required: true,
//       },
//       quantity: {
//         type: String,
//         required: true,
//       },
//     },
//   ],
//   instructions: {
//     type: String,
//     required: true,
//   },
//   cookingTime: {
//     type: Number,
//     required: true,
//   },
//   categories: [
//     {
//       type: String,
//       required: true,
//     },
//   ],
//   cuisine: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Cuisine",
//     required: true,
//   },
//   images: [
//     {
//       type: String,
//     },
//   ],
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
//   createdBy: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Chef",
//     default: null,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now,
//   },
//   isApproved: {
//     type: Boolean,
//     default: false,
//   },
//   isDeleted: {
//     type: Boolean,
//     default: false,
//   },
//   show: {
//     type: Boolean,
//     default: false,
//   },
// });

// recipeSchema.pre("save", function (next) {
//   this.updatedAt = Date.now();
//   next();
// });

// const Recipe = mongoose.model("Recipe", recipeSchema);

// module.exports = Recipe;

//////////////////////////////abedalmajeed/////////

// const mongoose = require("mongoose");

// const recipeSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   ingredients: [
//     {
//       name: {
//         type: String,
//         required: true,
//       },
//       quantity: {
//         type: String,
//         required: true,
//       },
//     },
//   ],
//   instructions: {
//     type: String,
//     required: true,
//   },
//   cookingTime: {
//     type: Number,
//     required: true,
//   },
//   categories: [
//     {
//       type: String,
//       required: true,
//     },
//   ],
//   cuisine: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Cuisine",
//     required: true,
//   },
//   images: [
//     {
//       type: String,
//     },
//   ],
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

//   createdBy: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Chef",
//     default: null,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now,
//   },
//   isApproved: {
//     type: Boolean,
//     default: false,
//   },
//   isDeleted: {
//     type: Boolean,
//     default: false,
//   },
//   show: {
//     type: Boolean,
//     default: false,
//   },
// });

// recipeSchema.pre("save", function (next) {
//   this.updatedAt = Date.now();
//   next();
// });

// const Recipe = mongoose.model("Recipe", recipeSchema);

// module.exports = Recipe;




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