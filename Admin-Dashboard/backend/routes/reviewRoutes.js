const express = require('express');
const { getReviews, updateReview } = require('../controllers/reviewController');
const router = express.Router();

router.get('/', getReviews);
router.put('/update', updateReview);

module.exports = router;
