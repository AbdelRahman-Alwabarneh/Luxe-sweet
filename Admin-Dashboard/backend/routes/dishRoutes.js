// routes/dishRoutes.js
const express = require('express');
const router = express.Router();
const dishController = require('../controllers/dishController');

// Fetch all dishes
router.get('/', dishController.getAllDishes);

// Update approval status
router.put('/approval', dishController.updateApprovalStatus);
// Fetch count of approved dishes
router.get('/approved-count', dishController.getApprovedDishesCount);
module.exports = router;
