const Review = require('../models/Review');

// Get all reviews
exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate('user', 'name');
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Approve or delete review
exports.updateReview = async (req, res) => {
  try {
    const { reviewId, isApproved } = req.body;
    const review = await Review.findById(reviewId);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    review.isApproved = isApproved;
    await review.save();
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
