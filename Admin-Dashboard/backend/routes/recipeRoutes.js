const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

// مسار لعرض جميع الوصفات
router.get('/recipes', recipeController.getAllRecipes);

// مسار لتحديث حالة الموافقة للوصفة
router.put('/recipes/approval', recipeController.updateApprovalStatus);
// New route to get count of approved recipes
router.get('/recipes/approved-count', recipeController.getApprovedCount);
module.exports = router;
