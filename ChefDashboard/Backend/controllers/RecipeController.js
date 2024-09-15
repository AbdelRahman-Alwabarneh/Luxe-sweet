const Recipe = require('../models/RecipeModel');

// Create a new recipe
// Create a new recipe
exports.createRecipe = async (req, res) => {
  try {
    // Validate the input if necessary
    const recipeData = req.body;

    // Validate ObjectId if createdBy is provided
    if (recipeData.createdBy && !mongoose.Types.ObjectId.isValid(recipeData.createdBy)) {
      return res.status(400).json({ message: 'Invalid createdBy field' });
    }

    // Create a new recipe
    const recipe = new Recipe({
      ...recipeData,
      createdBy: recipeData.createdBy || null, // Default to null if not provided
    });

    // Save the recipe
    await recipe.save();

    // Respond with the created recipe
    res.status(201).json(recipe);
  } catch (error) {
    console.error('Error creating recipe:', error);
    res.status(500).json({ message: 'Failed to create recipe' });
  }
};

// Get all recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({ isDeleted: false }).populate('cuisine', 'name');
    console.log(recipes);
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a recipe by ID
exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe || recipe.isDeleted) {
      return res.status(404).json({ message: 'Recipe not found' }).populate('cuisine', 'name');
    }
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a recipe
exports.updateRecipe = async (req, res) => {
  try {
    // Validate ObjectId if createdBy is provided
    if (req.body.createdBy && !mongoose.Types.ObjectId.isValid(req.body.createdBy)) {
      return res.status(400).json({ message: 'Invalid createdBy field' });
    }

    // Update recipe
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true }
    );

    if (!updatedRecipe || updatedRecipe.isDeleted) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json(updatedRecipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a recipe (soft delete)
exports.deleteRecipe = async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    );
    if (!deletedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json({ message: 'Recipe deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};