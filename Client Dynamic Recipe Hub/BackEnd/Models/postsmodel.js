const { Schema, model, default: mongoose } = require("mongoose");

const repliesSchema = new Schema({
  replyMessage: String,
  replyAuthor: { type: mongoose.Types.ObjectId, ref: "User" },
  replyDate: Date,
});

const commentSchema = new Schema({
  likeCount: { Number, default: 0 },
  dislikeCount: { Number, default: 0 },
  Comment: String,
  Date: Date,
  Author: { type: mongoose.Types.ObjectId, ref: "User" },
  replies: { repliesSchema },
});

const Rating = model("Rating", ratingSchema);

module.exports = Rating;
