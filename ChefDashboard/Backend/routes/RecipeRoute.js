const express = require('express');
const { createRecipe, getAllRecipes, getRecipeById, updateRecipe, deleteRecipe } = require('../controllers/RecipeController');

const router = express.Router();

// Recipe Routes
router.post('/createRecipe', createRecipe); // Create a recipe
router.get('/', getAllRecipes); // Get all recipes
router.get('/:id', getRecipeById); // Get a single recipe by ID
router.put('/:id', updateRecipe); // Update a recipe
router.delete('/:id', deleteRecipe); // Soft delete a recipe

module.exports = router;
