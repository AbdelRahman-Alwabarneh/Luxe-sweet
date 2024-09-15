const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  isApproved: { type: Boolean, default: false },
});

module.exports = mongoose.model('Review', reviewSchema);
